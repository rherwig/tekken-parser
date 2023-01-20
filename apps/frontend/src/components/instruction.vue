<template>
    <div class="flex flex-col items-center gap-2">
        <img
            :src="iconUrl"
            class="w-12 h-12"
            :class="props.instruction.type"
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
import { usePreferencesStore } from '@/store/preferences';

interface Props {
    instruction: any;
}

const props = defineProps<Props>();
const preferences = usePreferencesStore();

const iconUrl = computed(() => {
    return props.instruction.type === 'action'
        ? `/icons/${preferences.layout}/${props.instruction.slug}.svg`
        : `/icons/${props.instruction.slug}.svg`;
});
</script>

<style lang="scss">
.action {
    @apply mx-1;
}

.movement {

}

.special {

}
</style>
