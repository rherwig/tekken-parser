<template>
    <div v-if="character">
        <h1 class="text-2xl font-bold uppercase mb-4">{{ character.name }}</h1>

        <div
            v-for="combo in combos"
            :key="combo.id"
            class="mb-8"
        >
            <h3 class="text-xl mb-2">{{ combo.title || 'Untitled' }}</h3>

            <Combo :combo="parse(combo.notation)" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import parse from '@tekken/parser';

import { Character, useCharactersStore } from '../../store/characters';
import { useFirestore } from '../../firebase';
import Combo from '../../components/combo.vue';
import { collection, query, where, getDocs, doc } from 'firebase/firestore';

const route = useRoute();
const { db, findAll } = useFirestore();
const characters = useCharactersStore();

const character = ref<Character>(null);
const combos = ref<Record<string, any>[]>([]);

onMounted(async () => {
    await fetchCharacters();

    const { slug } = route.params;

    character.value = characters.all.find((character) => {
        return character.slug === slug;
    });

    await fetchCombos();
});

async function fetchCharacters() {
    const querySnapshot = await findAll('characters');
    const all = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as Character[];

    characters.setAll(all);
}

async function fetchCombos() {
    const q = query(
        collection(db, 'combos'),
        where('character', '==', doc(db, 'characters', character.value.id)),
    );

    const querySnapshot = await getDocs(q);
    combos.value = querySnapshot.docs.map((_doc) => ({
        id: _doc.id,
        ..._doc.data(),
    }));
}
</script>
