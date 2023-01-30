<template>
    <div>
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl">Characters</h1>
            <div>
                <CharacterCreate/>
            </div>
        </div>
        <p class="text-sm mb-8">
            Click on a character in order to see their combos.
            If the character you are looking for does not appear, it does not have
            any combos associated to it, yet.
        </p>
        <div
            v-if="characters"
            class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2"
        >
            <router-link
                :to="`/characters/${character.id}`"
                v-for="character in characters"
                :key="character.id"
                class="relative flex items-center justify-center aspect-square rounded overflow-hidden bg-zinc-900/50 hover:scale-105 hover:shadow-sm transition-all"
            >
                <img
                    :src="`/images/characters/${character.id}.png`"
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
import { useCollection, useFirestore } from 'vuefire';
import { collection } from 'firebase/firestore';

import CharacterCreate from '../../components/characters/character-create.vue';

const db = useFirestore();
const characters = useCollection(collection(db, 'characters'));
</script>
