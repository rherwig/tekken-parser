<template>
    <div class="mb-4 p-4 bg-zinc-100">
        <h3 class="text-xl mb-2">Combo</h3>

        <Move
            v-for="(move, index) in props.combo.moves"
            :key="index"
            :move="move"
        />
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import parse from '@tekken/parser';
import Move from '@/components/move.vue';

interface Props {
    combo: ReturnType<typeof parse>;
}

const props = defineProps<Props>();
</script>