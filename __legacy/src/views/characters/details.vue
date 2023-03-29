<template>
    <div v-if="character">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl">{{ character.name }}</h1>
            <ComboForm
                v-if="user"
                :character-id="route.params.id as string"
            />
        </div>
        <div
            v-for="combo in (character as ICharacter).combos"
            :key="combo.id"
            class="mb-8"
        >
            <Combo
                :id="combo.id"
                :name="combo.name"
                :damage="combo.damage"
                :hits="combo.hits"
                :notation="combo.notation"
                :character-id="character.id"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useCurrentUser, useDocument } from 'vuefire';

import { useFirestoreHelper } from '@/firebase';
import Combo from '@/components/combo.vue';
import ComboForm from '@/components/combos/combo-form.vue';
import { ICharacter } from '@/types/character';

const route = useRoute();
const { characterDocument } = useFirestoreHelper();
const user = useCurrentUser();

const characterRef = characterDocument(route.params.id as string);
const character = useDocument(characterRef) as any;
</script>
