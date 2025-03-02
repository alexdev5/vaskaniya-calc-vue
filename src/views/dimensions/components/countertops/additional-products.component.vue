<template>
    <AppBlock v-if="state.quantityAdditional > 0">
        <div class="additional-products">
            <div class="additional-products-images">
                <div
                    class="additional-products-image"
                    v-for="number in state.quantityAdditional"
                >
                    <!-- 1 -->
                    <AppNumberInput
                        :modelValue="
                            store.additionalProducts.get(number)?.width
                        "
                        @update:modelValue="
                            (value) => updateCountertop(number, 'width', value)
                        "
                        variant="hidden"
                        class="additional-products-width"
                    />
                    <AppNumberInput
                        :modelValue="
                            store.additionalProducts.get(number)?.depth
                        "
                        @update:modelValue="
                            (value) => updateCountertop(number, 'depth', value)
                        "
                        variant="hidden"
                        class="additional-products-depth"
                    />

                    <!-- 2 -->
                    <AppCircularToggleMenu
                        :modelValue="
                            store.additionalProducts.get(number)!.topAction
                        "
                        @update:modelValue="
                            (value) =>
                                updateCountertop(number, 'topAction', value)
                        "
                        class="top-side-action"
                    />
                    <AppCircularToggleMenu
                        :modelValue="
                            store.additionalProducts.get(number)!.rightAction
                        "
                        @update:modelValue="
                            (value) =>
                                updateCountertop(number, 'rightAction', value)
                        "
                        class="right-side-action"
                    />
                    <AppCircularToggleMenu
                        :modelValue="
                            store.additionalProducts.get(number)!.bottomAction
                        "
                        @update:modelValue="
                            (value) =>
                                updateCountertop(number, 'bottomAction', value)
                        "
                        class="bottom-side-action"
                    />
                    <AppCircularToggleMenu
                        :modelValue="
                            store.additionalProducts.get(number)!.leftAction
                        "
                        @update:modelValue="
                            (value) =>
                                updateCountertop(number, 'leftAction', value)
                        "
                        class="left-side-action"
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
import { watch } from 'vue'
import AppCircularToggleMenu from '@/components/elements/app-circular-toggle-menu.component.vue'
import { TableSideActions } from '@/api/dimensions'

const store = useDimensionsStore()

const { state } = useDimensionsStore()

const additionalValues = {
    width: undefined,
    depth: undefined,
    topAction: TableSideActions.None,
    rightAction: TableSideActions.None,
    bottomAction: TableSideActions.None,
    leftAction: TableSideActions.None,
}

const updateCountertop = (
    id: number,
    key:
        | 'width'
        | 'depth'
        | 'topAction'
        | 'rightAction'
        | 'bottomAction'
        | 'leftAction',
    value: number
) => {
    const existing = store.additionalProducts.get(id) || additionalValues
    store.additionalProducts.set(id, { ...existing, [key]: value })
}

store.additionalProducts.set(1, additionalValues)

// size
watch(
    () => state.quantityAdditional,
    (newCount, oldCount) => {
        if (!oldCount) return
        if (newCount >= oldCount) {
            store.additionalProducts.set(newCount, additionalValues)
            return
        }

        const countertopsArray = Array.from(store.additionalProducts.entries())
        const trimmedCountertops = countertopsArray.slice(0, newCount)
        store.additionalProducts = new Map(trimmedCountertops)
    },
    { immediate: true }
)
</script>

<style lang="scss">
.app-calculator-wrapper {
    .additional-products {
        margin-top: 36px;
        display: flex;
        justify-content: space-between;

        .additional-products-image {
            position: relative;
        }

        .additional-products-images {
            max-width: 500px;
            width: 100%;
            display: grid;
            gap: 40px;

            .app-number-input {
                width: 56px;

                .v-field__input {
                    --v-input-control-height: 24px;
                    height: 22px;
                    min-height: 24px;
                    font-size: var(--app-font-size-s);
                }
            }

            .additional-products-width {
                top: 1%;
                left: 32%;
            }

            .additional-products-depth {
                top: 60%;
                right: 6%;
            }
        }

        // Side actions
        .top-side-action {
            top: 28%;
            left: 36%;
        }

        .right-side-action {
            top: 60%;
            right: 22.5%;
        }

        .bottom-side-action {
            bottom: -6%;
            left: 36%;
        }

        .left-side-action {
            top: 60%;
            left: -2.5%;
        }
    }
}
</style>
