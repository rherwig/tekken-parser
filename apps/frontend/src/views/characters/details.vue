<template>
    <div v-if="character">
        <h1 class="text-2xl mb-4">{{ character.name }}</h1>

        <h3 class="text-xl mb-2">Staple Combo</h3>
        <Combo :combo="parse('d2;f2,f1;f,F,4,2;d/f2,1')"/>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import parse from '@tekken/parser';

import { Character, useCharactersStore } from '../../store/characters';
import { useFirestore } from '../../firebase';
import Combo from '../../components/combo.vue';

const route = useRoute();
const { findAll } = useFirestore();
const characters = useCharactersStore();

const character = ref<Character>(null);

onMounted(async () => {
    await fetchCharacters();

    const { slug } = route.params;

    character.value = characters.all.find((character) => {
        return character.slug === slug;
    });
});

async function fetchCharacters() {
    const querySnapshot = await findAll('characters');
    const all = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as Character[];

    characters.setAll(all);
}
</script>
