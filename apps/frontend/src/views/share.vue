<template>
    <Combo v-if="combo" :combo="combo" class="mb-10"/>

    <h2 class="text-lg mb-2">
        Share your combo
    </h2>

    <input
        type="text"
        placeholder="Enter Tekken Notation here"
        class="block input input-bordered w-full mb-4"
        :value="comboString"
        @input="handleComboInput"
    />

    <div class="alert">
        <div>
            <a
                :href="comboUrl"
                class="link link-accent px-2"
            >
                {{ comboUrl }}
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
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';

import parse from '@tekken/parser';
import Combo from '@/components/combo.vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const comboString = ref<string>('');

onMounted(() => {
    comboString.value = route.query.combo as string || '';
});

const combo = computed(() => {
    return comboString.value ? parse(comboString.value) : null;
})

const comboUrl = computed(() => {
    return `${window.location.origin}/#/share?combo=${encodeURIComponent(comboString.value)}`
});

function handleComboInput(event: any) {
    comboString.value = event.target.value;
    router.replace(`/share?combo=${comboString.value}`);
}

async function handleCopyClick() {
    try {
        await navigator.clipboard.writeText(comboUrl.value);
    } catch (error) {
        console.error('Failed to copy text.');
    }
}
</script>
