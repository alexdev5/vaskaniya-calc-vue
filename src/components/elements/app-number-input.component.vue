<template>
    <div class="app-number-input">
        <VNumberInput control-variant="split" v-model="model" :min="1" />
    </div>
</template>

<script lang="ts" setup>
defineProps<{}>()
const model = defineModel<number>()
</script>

<style lang="scss">
.app-number-input {
    max-width: 200px;

    .v-number-input {
        .v-input__details {
            display: none;
        }

        .v-number-input__control {
            border: 1px solid var(--app-color-n-92);
            background: var(--app-color-secondary);
        }

        .v-field__field {
            background: var(--app-color-secondary);
        }

        .v-field__outline {
            display: none;
        }
    }
}
</style>
