<template>
    <AppBlock v-if="state.quantityAdditional > 0">
        <div class="additional-countertops">
            <div class="additional-countertops-images">
                <div
                    class="additional-countertops-image"
                    v-for="number in state.quantityAdditional"
                >
                    <AppNumberInput
                        v-model="state.additionalTableWidth"
                        variant="hidden"
                        class="additional-countertops-width"
                    />
                    <AppNumberInput
                        v-model="state.additionalTableDepth"
                        variant="hidden"
                        class="additional-countertops-depth"
                    />
                    <img
                        :src="
                            Config.getImageUrl(
                                'dimensions/additional-rectangle.svg'
                            )
                        "
                        alt=""
                    />
                </div>
            </div>

            <div>
                <AppNumberInput v-model="state.quantityAdditional" />
            </div>
        </div>
    </AppBlock>
</template>

<script lang="ts" setup>
import { Config } from '@/config'
import AppNumberInput from '@/components/elements/app-number-input.component.vue'
import { useDimensionsStore } from '@/views/dimensions/dimensions.store.ts'
import AppBlock from '@/components/app-block/app-block.component.vue'

const store = useDimensionsStore()

const { state } = useDimensionsStore()
</script>

<style lang="scss">
.app-calculator-wrapper {
    .additional-countertops {
        margin-top: 36px;
        display: flex;
        justify-content: space-between;

        .additional-countertops-image {
            position: relative;
        }

        .additional-countertops-images {
            max-width: 500px;
            width: 100%;
            display: grid;
            gap: 24px;

            .app-number-input {
                width: 56px;

                .v-field__input {
                    --v-input-control-height: 24px;
                    height: 22px;
                    min-height: 24px;
                    font-size: var(--app-font-size-s);
                }
            }

            .additional-countertops-width {
                top: 1%;
                left: 32%;
            }

            .additional-countertops-depth {
                top: 60%;
                right: 6%;
            }
        }
    }
}
</style>
