<template>
    <div class="container py-8">
        <h1 class="text-2xl mb-2">Tekken Parser</h1>

        <Combo v-if="combo" :combo="combo"/>

        <h2 class="text-lg mb-2 mt-10">
            Share your combo
        </h2>

        <input
            type="text"
            placeholder="Enter Tekken Notation here"
            class="block input input-bordered w-full mb-4"
            v-model="newComboString"
        />

        <Combo v-if="newComboString" :combo="newCombo"/>

        <div class="alert">
            <div>
                <a
                    :href="newComboUrl"
                    class="link link-neutral px-2"
                >
                    {{ newComboUrl }}
                </a>
            </div>
            <div class="flex-none">
                <button
                    class="btn btn-sm"
                    @click="handleCopyClick"
                >
                    Copy
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

import parse from '@tekken/parser';
import Combo from '@/components/combo.vue';

const comboString = ref<string | null>(getComboFromUrl());
const newComboString = ref<string>('');

const combo = computed(() => {
    return comboString.value ? parse(comboString.value) : null;
})

const newComboUrl = computed(() => {
    return `${window.location.origin}/?combo=${encodeURIComponent(newComboString.value)}`
});

const newCombo = computed(() => {
    let result = null;

    try {
        result = parse(newComboString.value);
    } catch (error) {
        console.warn('Combo invalid.');
    }

    return result;
});

function getComboFromUrl(): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    const combo = urlParams.get('combo');

    return combo ? decodeURIComponent(combo) : null;
}

async function handleCopyClick() {
    try {
        await navigator.clipboard.writeText(newComboUrl.value);
    } catch (error) {
        console.error('Failed to copy text.');
    }
}
</script>
