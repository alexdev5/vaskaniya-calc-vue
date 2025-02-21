<template>
    <div class="app-calculator-wrapper">
        <AppNavigation />

        <div class="vs-wrapper">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import AppNavigation from '@/components/navigations/app-navigation.component.vue'
</script>
