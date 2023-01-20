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
            {{ props.instruction.notation }}
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
    const { slug } = props.instruction;

    switch (props.instruction.type) {
        case 'action':
            return `/icons/${preferences.layout}/${slug}.svg`;
        case 'movement':
            return `/icons/movement/${slug}.svg`;
        default:
            return `/icons/${slug}.svg`;
    }
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
