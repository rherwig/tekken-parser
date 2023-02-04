<template>
    <div class="mb-4 bg-black/10">
        <div class="flex items-center justify-between w-full min-h-8 px-4 py-2 bg-black/10">
            <h3 class="text-sm">
                {{ props.name }}
            </h3>

            <div class="flex gap-2 text-sm">
                <button
                    v-if="props.id && user"
                    type="button"
                    class="btn btn-xs hover:btn-error"
                    @click="handleDeleteClick"
                >
                    Delete
                </button>
            </div>
        </div>

        <div class="p-4">
            <Move
                v-for="(move, index) in parsedCombo?.moves"
                :key="index"
                :move="move"
            />
        </div>

        <div class="flex items-center gap-2 px-4 min-h-8 py-2 bg-black/5">
            <div
                v-if="props.damage"
                class="badge"
            >
                {{ damageText }}
            </div>

            <div
                v-if="props.hits"
                class="badge"
            >
                {{ hitsText }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import { useCurrentUser, useDocument } from 'vuefire';
import { deleteDoc, updateDoc, arrayRemove } from 'firebase/firestore';
import parse from '@tekken/parser';

import { useFirestoreHelper } from '@/firebase';
import Move from '@/components/move.vue';

interface Props {
    notation?: string;
    id?: string;
    name?: string;
    damage?: number;
    hits?: number;
    characterId?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['edit']);

const user = useCurrentUser();
const { comboDocument, characterDocument } = useFirestoreHelper();

const combo = computed(() => {
    return props.id && useDocument(comboDocument(props.id)).value;
});

const damageText = computed(() => {
    return `${props.damage} Damage`;
});

const hitsText = computed(() => {
    return `${props.hits} Hit${props.hits > 1 ? 's' : ''}`
})

const parsedCombo = computed(() => {
    return parse(props.notation ?? '');
});

async function handleDeleteClick() {
    if (!props.id || !props.characterId) {
        return;
    }

    try {
        const characterRef = characterDocument(props.characterId);
        const comboRef = comboDocument(props.id);

        await updateDoc(characterRef, {
            combos: arrayRemove(comboRef),
        });
        await deleteDoc(comboRef);
    } catch (error) {
        console.error(error);
    }
}
</script>
