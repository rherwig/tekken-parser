<template>
    <div
        role="dialog"
        class="modal cursor-pointer"
        :class="props.modelValue ? 'modal--visible' : ''"
        @click="handleClose"
    >
        <div
            class="modal-box max-w-2xl relative cursor-auto"
            @click.stop
        >
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    modelValue: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const handleClose = () => {
    emit('update:modelValue', false);
};
</script>

<style lang="scss" scoped>
.modal--visible {
    pointer-events: auto !important;
    visibility: visible !important;
    opacity: 1 !important;
}
</style>
