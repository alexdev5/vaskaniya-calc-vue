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

        <CountertopsRectangle />

        <AdditionalProducts />
    </template>
</template>

<script lang="ts" setup>
import AppBlock from '@/components/app-block/app-block.component.vue'
import AppBlockCardContainer from '@/components/app-block/app-card-container.component.vue'
import AppBlockCard from '@/components/app-block/app-block-card/app-block-card.component.vue'
import CountertopsRectangle from './components/countertops/countertops-rectangle.component.vue'
import AdditionalProducts from './components/countertops/additional-products.component.vue'

import { useDimensionsStore } from '@/views/dimensions/dimensions.store.ts'
import { onMounted } from 'vue'

const store = useDimensionsStore()

const { state, loadDimensions } = useDimensionsStore()

onMounted(async () => {
    await loadDimensions()
})
</script>

<style lang="scss">
@import './dimensions.style';
</style>
