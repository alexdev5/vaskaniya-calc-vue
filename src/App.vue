<template>
    <div class="app-calculator-wrapper">
        <h1>Добро пожаловать в наш Online-калькулятор</h1>

        <div class="app-calculator-container">
            <AppNavigation :price="0" :currency="`$`" />

            <div class="app-calculator-body-wrapper">
                <div class="app-calculator-body">
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppNavigation from '@/components/navigations/app-navigation.component.vue'
</script>
