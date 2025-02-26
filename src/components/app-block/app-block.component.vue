<template>
    <div class="app-block">
        <p class="app-block-title" v-if="title">
            <span class="app-color-red" v-if="number">{{ number }}</span>
            <span>{{ title }}</span>
        </p>
        <slot />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    title?: string
    number?: any
}>()
</script>

<style lang="scss">
.app-block {
    display: grid;
    gap: 12px;

    .app-block-title {
        font-weight: 600;
        display: flex;
        gap: 4px;
        font-size: var(--app-font-size-m);
    }
}
</style>
