<template>
    <div class="inline-flex mr-2 -ml-1 group">
        <Instruction
            v-for="(instruction, index) in props.move.instructions"
            :key="index"
            :instruction="instruction"
        />

        <div class="pl-3 pr-2 group-last:hidden">
            <img
                src="/icons/follow.svg"
                class="h-10"
                alt="Next Move"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

import Instruction from '@/components/instruction.vue';

interface Props {
    move: any;
}

const props = defineProps<Props>();
</script>
