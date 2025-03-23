<template>
    <template v-if="state.entries">
        <AppBlock
            :title="state.entries?.parent?.acf.blockTitle"
            :number="state.entries?.parent?.acf.blockNumber"
        >
            <AppBlockCardContainer v-if="state.entries">
                <AppBlockCard
                    v-for="productType in state.entries.productTypes"
                    :record="productType"
                    :label="productType?.title"
                    :active="productType.id === state.selectedProductTypeId"
                    :class="{
                        active: productType.id === state.selectedProductTypeId,
                        'is-term-visibility': productType.acf.isHidden,
                    }"
                    @click="state.selectedProductTypeId = productType.id"
                />
            </AppBlockCardContainer>
        </AppBlock>

        <AppBlock
            :title="store.selectedProductType?.acf.blockTitle ?? '—'"
            :number="store.selectedProductType?.acf?.blockNumber"
        >
            <AppBlockCardContainer v-if="state.entries">
                <AppBlockCard
                    v-for="configuration in state.entries.configurations"
                    v-show="
                        configuration.productTypeParentId ===
                        store.state.selectedProductTypeId
                    "
                    :active="configuration.id === state.selectedConfigurationId"
                    :record="configuration"
                    :label="configuration?.title"
                    :class="{
                        active:
                            configuration.id === state.selectedConfigurationId,
                        'is-term-visibility': configuration.acf.isHidden,
                    }"
                    @click="state.selectedConfigurationId = configuration.id"
                />
            </AppBlockCardContainer>
        </AppBlock>

        <Rectangle
            v-if="countertopsName === Countertops.Rectangle"
            :name="countertopsName"
        />
        <StraightWindowsill
            v-if="countertopsName === Countertops.StraightWindowsill"
            :name="countertopsName"
        />

        <AdditionalProducts />
    </template>
</template>

<script lang="ts" setup>
import AppBlock from '@/components/app-block/app-block.component.vue'
import AppBlockCardContainer from '@/components/app-block/app-card-container.component.vue'
import AppBlockCard from '@/components/app-block/app-block-card/app-block-card.component.vue'
import Rectangle from './components/tables/rectangle.component.vue'
import StraightWindowsill from './components/tables/straight-windowsill.component.vue'
import AdditionalProducts from './components/tables/additional-products.component.vue'

import { useDimensionsStore } from '@/views/dimensions/dimensions.store.ts'
import { Countertops } from '@/api/dimensions'
import { computed } from 'vue'

const store = useDimensionsStore()

const { state } = useDimensionsStore()
const countertopsName = computed(() => store.selectedConfiguration?.acf.name)
</script>

<style lang="scss">
@import './dimensions.style';
</style>
