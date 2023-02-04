<template>
    <div>
        <button class="btn btn-primary btn-sm" @click="openModal">
            Add Combo
        </button>

        <Modal v-model="isVisible">
            <h3 class="text-xl mb-4">Add Combo</h3>

            <form @submit.prevent="handleAddClick" class="m-0">
                <input
                    type="text"
                    class="block input input-bordered w-full mb-4"
                    v-model="comboName"
                    placeholder="Combo Name"
                    ref="nameInput"
                />

                <input
                    type="text"
                    placeholder="Tekken Notation (d2;...)"
                    class="block input input-bordered w-full mb-4"
                    :value="comboNotation"
                    @input="handleComboInput"
                />

                <Combo v-if="combo" :combo="combo" />

                <input
                    type="number"
                    placeholder="Damage (optional)"
                    class="block input input-bordered w-full mb-4"
                    v-model="comboDamage"
                />

                <input
                    type="number"
                    placeholder="Number of Hits (optional)"
                    class="block input input-bordered w-full mb-4"
                    v-model="comboHits"
                />

                <button class="btn btn-primary mt-4 px-8" type="submit">
                    Add
                </button>

                <button
                    class="btn btn-ghost mt-4 ml-2 px-8"
                    type="reset"
                    @click="closeModal"
                >
                    Cancel
                </button>
            </form>
        </Modal>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useFirestore } from 'vuefire';
import { updateDoc, arrayUnion, DocumentReference } from 'firebase/firestore';
import parse from '@tekken/parser';

import Combo from '../../components/combo.vue';
import Modal from '../../ui/modals/modal.vue';
import { autoId } from '../../utils/id';

interface Props {
    characterRef: DocumentReference;
}

const props = defineProps<Props>();

const db = useFirestore();

const nameInput = ref<HTMLInputElement>();
const isVisible = ref<boolean>(false);
const comboName = ref<string>('');
const comboDamage = ref<number>();
const comboHits = ref<number>();
const comboNotation = ref<string>('');

const combo = computed(() => {
    return comboNotation.value ? parse(comboNotation.value) : null;
})

function handleComboInput(event: any) {
    comboNotation.value = event.target.value;
}

function openModal() {
    isVisible.value = true;
    nameInput.value.focus();
}

function closeModal() {
    isVisible.value = false;
}

async function handleAddClick() {
    try {
        if (!comboName.value || !comboNotation.value) {
            return;
        }

        await updateDoc(props.characterRef, {
            combos: arrayUnion({
                id: autoId(),
                name: comboName.value,
                notation: comboNotation.value,
                damage: comboDamage.value,
                hits: comboHits.value,
            }),
        });

        comboName.value = '';
        comboNotation.value = '';
        closeModal();
    } catch (error) {
        console.error(error);
    }
}
</script>
