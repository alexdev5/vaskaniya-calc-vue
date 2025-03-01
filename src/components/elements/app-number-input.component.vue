<template>
    <div class="app-number-input" :class="variant">
        <VNumberInput :control-variant="variant" v-model="model" :min="min" />
    </div>
</template>

<script lang="ts" setup>
withDefaults(
    defineProps<{
        variant?: 'split' | 'hidden'
        min: number
    }>(),
    { variant: 'split', min: 0 }
)
const model = defineModel<number>()
</script>

<style lang="scss">
.app-number-input {
    &.split {
        width: 160px;
    }

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
