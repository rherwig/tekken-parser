<template>
    <div>
        <button
            class="btn btn-primary btn-sm"
            @click="openModal"
        >
            Add Combo
        </button>

        <Modal v-model="isVisible">
            <h3 class="text-xl mb-4">Add Combo</h3>

            <form @submit.prevent="handleAddClick" class="m-0">
                <input
                    type="text"
                    class="block input input-bordered w-full mb-4"
                    v-model="comboDto.name"
                    placeholder="Combo Name"
                />

                <input
                    type="text"
                    placeholder="Tekken Notation (d2;...)"
                    class="block input input-bordered w-full mb-4"
                    v-model="comboDto.notation"
                />

                <input
                    type="number"
                    placeholder="Damage (optional)"
                    class="block input input-bordered w-full mb-4"
                    v-model="comboDto.damage"
                />

                <input
                    type="number"
                    placeholder="Number of Hits (optional)"
                    class="block input input-bordered w-full mb-4"
                    v-model="comboDto.hits"
                />

                <Combo
                    :name="comboDto.name"
                    :notation="comboDto.notation"
                    :damage="comboDto.damage"
                    :hits="comboDto.hits"
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
import { ref, unref } from 'vue';
import { updateDoc, arrayUnion, addDoc } from 'firebase/firestore';

import { useFirestoreHelper } from '@/firebase';
import { ICombo } from '@/types/combo';
import Combo from '@/components/combo.vue';
import Modal from '@/ui/modals/modal.vue';

interface Props {
    characterId: string;
    combo?: ICombo;
}

const props = defineProps<Props>();
const { characterDocument, combosCollection, comboDocument } = useFirestoreHelper();

const characterRef = characterDocument(props.characterId);

const isVisible = ref<boolean>(false);
const comboDto = ref<ICombo>(props.combo ?? {
    name: '',
    notation: '',
    damage: null,
    hits: null,
});

function openModal() {
    isVisible.value = true;
}

function closeModal() {
    isVisible.value = false;
}

function resetForm() {
    comboDto.value.name = '';
    comboDto.value.notation = '';
    comboDto.value.damage = null;
    comboDto.value.hits = null;
}

async function createCombo(combo: ICombo) {
    const comboRef = await addDoc(combosCollection, combo);

    return updateDoc(characterRef, {
        combos: arrayUnion(comboDocument(comboRef.id))
    });
}

async function updateCombo(combo: ICombo) {
    const comboRef = comboDocument(combo.id);

    return updateDoc(comboRef, combo);
}

async function handleAddClick() {
    const { id, name } = unref(comboDto);

    if (!name || !props.characterId) {
        return;
    }

    try {
        const combo: ICombo = Object.assign(comboDto.value, {
            character: characterRef,
        });

        if (id) {
            await updateCombo(combo);
        } else {
            await createCombo(combo);
            resetForm();
        }

        closeModal();
    } catch (error) {
        console.error(error);
    }
}
</script>
