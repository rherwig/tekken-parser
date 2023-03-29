<template>
    <div>
        <button class="btn btn-primary btn-sm" @click="openModal">
            Add Character
        </button>

        <Modal v-model="isVisible">
            <h3 class="text-xl mb-4">Add Character</h3>

            <form @submit.prevent="handleAddClick" class="m-0">
                <input
                    type="text"
                    class="block input input-bordered w-full"
                    v-model="characterName"
                    placeholder="Character Name"
                    ref="nameInput"
                />

                <button class="btn btn-primary mt-4 px-8" type="submit">
                    Add
                </button>
            </form>
        </Modal>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useFirestore } from 'vuefire';
import { setDoc } from 'firebase/firestore';

import Modal from '@/ui/modals/modal.vue';
import { stripName } from '@/utils/name';
import { useFirestoreHelper } from '@/firebase';

const db = useFirestore();
const { characterDocument } = useFirestoreHelper();

const nameInput = ref<HTMLInputElement>();
const isVisible = ref<boolean>(false);
const characterName = ref<string>('');

function openModal() {
    isVisible.value = true;
    nameInput.value.focus();
}

function closeModal() {
    isVisible.value = false;
}

async function handleAddClick() {
    try {
        if (!characterName.value) {
            return;
        }

        const id = stripName(characterName.value);

        await setDoc<any>(characterDocument(id), {
            id,
            name: characterName.value,
            combos: [],
        });

        characterName.value = '';
        closeModal();
    } catch (error) {
        console.error(error);
    }
}
</script>
