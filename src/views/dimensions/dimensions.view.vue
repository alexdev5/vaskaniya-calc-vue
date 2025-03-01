<template>
    <AppBlock
        :title="state.entries?.parent?.acf.blockTitle"
        :number="state.entries?.parent?.acf.blockNumber"
    >
        <AppBlockCardContainer v-if="state.entries">
            <AppBlockCard
                v-for="productType in state.entries.productTypes"
                :record="productType"
                :label="productType?.title"
                :class="{
                    'app-block-card-active':
                        productType.id === state.selectedProductTypeId,
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
                :record="configuration"
                :class="{
                    'app-block-card-active':
                        configuration.id === state.selectedConfigurationId,
                    'is-term-visibility': configuration.acf.isHidden,
                }"
                @click="state.selectedConfigurationId = configuration.id"
            />
        </AppBlockCardContainer>
    </AppBlock>

    <CountertopsRectangle />
    <AdditionalCountertops />
</template>

<script lang="ts" setup>
import AppBlock from '@/components/app-block/app-block.component.vue'
import AppBlockCardContainer from '@/components/app-block/app-card-container.component.vue'
import AppBlockCard from '@/components/app-block/app-block-card/app-block-card.component.vue'
import CountertopsRectangle from './components/countertops/countertops-rectangle.component.vue'
import AdditionalCountertops from './components/countertops/additional-countertops.component.vue'

import { useDimensionsStore } from '@/views/dimensions/dimensions.store.ts'
import { onMounted, watch } from 'vue'

const store = useDimensionsStore()

const { state, loadDimensions } = useDimensionsStore()

watch(
    () => state.topSideAction,
    (value) => {
        console.log(value)
    }
)
onMounted(async () => {
    await loadDimensions()
})
</script>

<style lang="scss">
@import './dimensions.style';
</style>
