<template>
    <Header/>

    <div class="container py-8">
        <router-view/>
    </div>
</template>

<script lang="ts" setup>
import Header from '@/layout/header.vue';
</script>
