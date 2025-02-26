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

    <AppBlock :title="content.dimensions.setDimensionsTitle" :number="3">
        <DesignationsDescription />
    </AppBlock>
</template>

<script lang="ts" setup>
import AppBlockCard from '@/components/app-block/app-block-card/app-block-card.component.vue'
import AppBlockCardContainer from '@/components/app-block/app-card-container.component.vue'
import AppBlock from '@/components/app-block/app-block.component.vue'
import DesignationsDescription from './components/designations-description.component.vue'

import { content } from '@/content'
import { useDimensionsStore } from '@/views/dimensions/dimensions.store.ts'
import { onMounted } from 'vue'

const store = useDimensionsStore()

const { state, loadDimensions } = useDimensionsStore()

onMounted(async () => {
    await loadDimensions()
    //store.setCardDefault()
})
</script>

<style lang="scss"></style>
