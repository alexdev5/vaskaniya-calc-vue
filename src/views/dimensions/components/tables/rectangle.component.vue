<template>
    <AppBlock
        :title="content.dimensions.setDimensionsTitle"
        :number="3"
        :class="store.selectedConfiguration?.acf.name"
    >
        <DesignationsDescription />
        <div class="app-block-figure-wrapper" v-if="store.figureSelected">
            <div class="app-block-figure" v-if="store.figureSelected.thumbnail">
                <div class="app-block-figure-image">
                    <AppCircularToggleMenu
                        v-model="
                            store.tables.get(Countertops.Rectangle)!.topAction
                        "
                        class="top-side-action"
                    />
                    <AppCircularToggleMenu
                        v-model="
                            store.tables.get(Countertops.Rectangle)!.rightAction
                        "
                        class="right-side-action"
                    />
                    <AppCircularToggleMenu
                        v-model="
                            store.tables.get(Countertops.Rectangle)!
                                .bottomAction
                        "
                        class="bottom-side-action"
                    />
                    <AppCircularToggleMenu
                        v-model="
                            store.tables.get(Countertops.Rectangle)!.leftAction
                        "
                        class="left-side-action"
                    />
                    <img
                        :src="store.figureSelected.thumbnail.url"
                        alt="thumbnail"
                    />

                    <AppNumberInput
                        v-model="store.tables.get(Countertops.Rectangle)!.width"
                        variant="hidden"
                        class="width"
                    />
                    <AppNumberInput
                        v-model="store.tables.get(Countertops.Rectangle)!.depth"
                        variant="hidden"
                        class="depth"
                    />
                </div>

                <AppNumberInput v-model="state.quantity" :min="1" />
            </div>

            <div class="app-block-figure-additional">
                <AppBtn red rounded @click="state.quantityAdditional++">
                    <template #prepend>+</template>
                    Добавить размер
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
import AppNumberInput from '@/components/elements/app-number-input.component.vue'
import DesignationsDescription from '@/views/dimensions/components/designations-description.component.vue'
import AppBtn from '@/components/elements/app-btn/app-btn.component.vue'
import AppCircularToggleMenu from '@/components/elements/app-circular-toggle-menu.component.vue'
import AppBlock from '@/components/app-block/app-block.component.vue'
import { useDimensionsStore } from '@/views/dimensions/dimensions.store.ts'

import { content } from '@/content'
import { onBeforeMount } from 'vue'
import { Countertops } from '@/api/dimensions'
import {
    TableInitialTypes,
    TableInitialValues,
} from '@/views/dimensions/components/tables/table-initial-values'

const props = defineProps<{
    name: keyof TableInitialTypes
}>()

const store = useDimensionsStore()

const { state } = useDimensionsStore()

onBeforeMount(() => {
    store.tables.set(props.name, TableInitialValues[props.name]())

    console.log(store.tables)
})
</script>

<style lang="scss">
//.app-calculator-wrapper
.app-block.rectangle {
    .width {
        top: 26%;
        left: 26%;
        transform: rotate(-30deg);
    }

    .depth {
        top: 5%;
        right: 6%;
        transform: rotate(30deg);
    }

    .top-side-action {
        top: 38%;
        left: 39%;
    }

    .right-side-action {
        top: 17%;
        right: 15%;
    }

    .bottom-side-action {
        left: 60%;
        bottom: 34%;
    }

    .left-side-action {
        top: 83%;
        left: 18%;
    }
}
</style>
