<template>
    <div class="flex flex-col items-center gap-2">
        <img
            :src="iconUrl"
            class="w-10 h-10"
            :alt="props.instruction.slug"
            :title="props.instruction.slug"
        />

        <div class="h-5">
            {{ props.instruction.slug }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';

interface Props {
    instruction: any;
}

const props = defineProps<Props>();

const iconUrl = computed(() => {
    return `/icons/${props.instruction.slug}.svg`;
});
</script>
