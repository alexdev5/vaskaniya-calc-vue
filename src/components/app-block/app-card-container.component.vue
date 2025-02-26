<template>
    <div class="app-block-card-container">
        <slot />
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.app-block-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    //display: grid;
    //
    //grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>
