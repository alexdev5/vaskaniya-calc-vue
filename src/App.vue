<template>
    <div class="app-calculator-wrapper">
        <h1>Добро пожаловать в наш Online-калькулятор</h1>

        <div class="app-calculator-container">
            <AppNavigation />

            <div class="app-calculator-body">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppNavigation from '@/components/navigations/app-navigation.component.vue'
</script>
