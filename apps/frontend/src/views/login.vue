<template>
    <form @submit.prevent="handleLogin" class="flex flex-col gap-2 max-w-sm mx-auto">
        <h2 class="text-2xl mb-4">Login</h2>
        <input
            type="text"
            class="input input-bordered w-full"
            v-model="email"
            autocomplete="username"
            placeholder="Your E-Mail"
        />
        <input
            type="password"
            class="input input-bordered"
            v-model="password"
            autocomplete="current-password"
            placeholder="Your Password"
        />
        <button type="submit" class="btn self-start px-10 mt-4">Login</button>
    </form>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { useFirebaseAuth } from 'vuefire';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const auth = useFirebaseAuth();
const router = useRouter();

const email = ref<string>('');
const password = ref<string>('');

async function handleLogin() {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email.value, password.value);
        if (!user) {
            return;
        }

        await router.push('/');
    } catch (error) {
        console.error(error);
    }
}
</script>
