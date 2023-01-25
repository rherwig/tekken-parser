<template>
    <div>
        <h1 class="text-2xl mb-4">Characters</h1>
        <p class="text-sm mb-8">
            Click on a character in order to see their combos.
            If the character you are looking for does not appear, it does not have
            any combos associated to it, yet.
        </p>
        <div
            v-if="characters"
            class="grid grid-cols-8"
        >
            <router-link
                :to="`/characters/${character.slug}`"
                v-for="character in characters.all"
                :key="character.id"
                class="relative flex items-center justify-center aspect-square rounded overflow-hidden bg-zinc-900/50 hover:scale-105 hover:shadow-sm transition-all"
            >
                <img
                    :src="`/images/characters/${character.slug}.png`"
                    class="w-full object-cover"
                    alt=""
                />

                <span class="absolute bottom-0 flex items-center justify-center w-full bg-black/75 text-xs px-2 py-1">
                    {{ character.name }}
                </span>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

import { useFirestore } from '../../firebase';
import { Character, useCharactersStore } from '../../store/characters';

const { findAll } = useFirestore();
const characters = useCharactersStore();

onMounted(async () => {
    await fetchCharacters();
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
