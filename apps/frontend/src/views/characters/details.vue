<template>
    <div v-if="character">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl">{{ character.name }}</h1>
            <div>
                <ComboCreate :character-ref="characterRef"/>
            </div>
        </div>
        <div
            v-for="combo in character.combos"
            :key="combo.id"
            class="mb-8"
        >
            <Combo
                :id="combo.id"
                :name="combo.name"
                :damage="combo.damage"
                :hits="combo.hits"
                :combo="parse(combo.notation)"
                @delete="handleDelete"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useDocument, useFirestore } from 'vuefire';
import { doc, updateDoc } from 'firebase/firestore';
import parse from '@tekken/parser';

import Combo from '../../components/combo.vue';
import ComboCreate from '../../components/combos/combo-create.vue';

const route = useRoute();
const db = useFirestore();

const characterRef = doc(db, 'characters', route.params.id as string);
const character = useDocument(characterRef);

async function handleDelete(id: string) {
    try {
        await updateDoc(characterRef, {
            combos: character.value.combos.filter((combo) => combo.id !== id),
        });
    } catch (error) {
        console.error(error);
    }}
</script>
