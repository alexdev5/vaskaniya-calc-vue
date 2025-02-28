<template>
    <AppBlock
        :title="state.entries?.parent?.acf.blockTitle"
        :number="state.entries?.parent?.acf.blockNumber"
    >
        <VNumberInput control-variant="split"></VNumberInput>
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

    <AppBlock :title="content.dimensions.setDimensionsTitle" :number="3">
        <DesignationsDescription />
        <div class="app-block-figure-wrapper" v-if="store.figureSelected">
            <div class="app-block-figure" v-if="store.figureSelected.thumbnail">
                <img
                    :src="store.figureSelected.thumbnail.url"
                    alt="thumbnail"
                />
            </div>
            <div class="app-block-figure-additional">
                <AppBtn red rounded>
                    <template #prepend>+</template>
                    Добавить столешницу
                </AppBtn>
                <div class="app-block-figure-notification">
                    Вы можете добавить неограниченное количество изделий в свой
                    проект. Под добавленными изделиями могут быть дополнительная
                    столешница, подоконник, барная стойка, опора в пол, фартук и
                    любой другой элемент.
                </div>
            </div>
        </div>
    </AppBlock>
</template>

<script lang="ts" setup>
import AppBtn from '@/components/elements/app-btn/app-btn.component.vue'
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
})
</script>

<style lang="scss">
@import './dimensions.style';
</style>
