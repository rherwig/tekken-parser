<template>
    <div class="container py-8">
        <Combo
            v-for="(combo, index) in combos"
            :combo="combo"
            :key="index"
        />
    </div>
</template>

<script lang="ts" setup>
import parse from '@tekken/parser';
import Combo from '@/components/combo.vue';

const rawCombos = [
    'd/b2',
    'd2;f,f,4,2',
];

const combos = rawCombos.map(parse);

console.log(combos);
</script>
