<template>
    <div class="mb-4 bg-black/10">
        <div class="flex items-center justify-between w-full min-h-8 px-4 py-2 bg-black/10">
            <h3 class="text-sm">
                {{ props.name }}
            </h3>

            <div class="text-sm">
                <button
                    v-if="props.id"
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
                v-for="(move, index) in props.combo.moves"
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
import parse from '@tekken/parser';
import Move from '@/components/move.vue';

interface Props {
    combo: ReturnType<typeof parse>;
    id?: string;
    name?: string;
    damage?: number;
    hits?: number;
}

const props = defineProps<Props>();
const emit = defineEmits(['delete']);

const damageText = computed(() => {
    return `${props.damage} Damage`;
});

const hitsText = computed(() => {
    return `${props.hits} Hit${props.hits > 1 ? 's' : ''}`
})

function handleDeleteClick() {
    if (!props.id) {
        return;
    }

    return emit('delete', props.id);
}

console.log(props)
</script>
