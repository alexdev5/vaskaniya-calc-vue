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
                    <!-- Actions -->
                    <AppCircularToggleMenu
                        v-model="
                            store.tables.get(Countertops.StraightWindowsill)!
                                .topAction
                        "
                        class="top-side-action"
                    />
                    <AppCircularToggleMenu
                        v-model="
                            store.tables.get(Countertops.StraightWindowsill)!
                                .rightAction
                        "
                        class="right-side-action"
                    />
                    <AppCircularToggleMenu
                        v-model="
                            store.tables.get(Countertops.StraightWindowsill)!
                                .bottomAction
                        "
                        class="bottom-side-action"
                    />
                    <AppCircularToggleMenu
                        v-model="
                            store.tables.get(Countertops.StraightWindowsill)!
                                .leftAction
                        "
                        class="left-side-action"
                    />
                    <img
                        :src="store.figureSelected.thumbnail.url"
                        alt="thumbnail"
                    />

                    <!-- Inputs -->
                    <AppNumberInput
                        v-model="
                            store.tables.get(Countertops.StraightWindowsill)!
                                .width
                        "
                        variant="hidden"
                        class="width"
                    />
                    <AppNumberInput
                        v-model="
                            store.tables.get(Countertops.StraightWindowsill)!
                                .depth
                        "
                        variant="hidden"
                        class="depth"
                    />
                    <AppNumberInput
                        v-model="
                            store.tables.get(Countertops.StraightWindowsill)!
                                .stillWidth
                        "
                        variant="hidden"
                        class="still-width"
                    />
                    <AppNumberInput
                        v-model="
                            store.tables.get(Countertops.StraightWindowsill)!
                                .stillDepth
                        "
                        variant="hidden"
                        class="still-depth"
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
import { TableInitialValues } from '@/views/dimensions/components/tables/table-initial-values.ts'

const props = defineProps<{
    name: Countertops
}>()

const store = useDimensionsStore()

const { state } = useDimensionsStore()

const table = store.tables.get(Countertops.StraightWindowsill)

onBeforeMount(() => {
    store.tables.set(props.name, TableInitialValues[props.name]())

    console.log(store.tables)
})
</script>

<style lang="scss">
//.app-calculator-wrapper
.app-block.straight-windowsill {
    .width {
        top: 23%;
        left: 23%;
        transform: rotate(-30deg);
    }

    .depth {
        top: 14.5%;
        right: 4.5%;
        transform: rotate(30deg);
    }

    .still-depth {
        top: 30%;
        right: 20%;
        transform: rotate(30deg);
    }

    .still-width {
        top: 30%;
        left: 31%;
        transform: rotate(-30deg);
    }

    .top-side-action {
        top: 40%;
        left: 41%;
    }

    .right-side-action {
        top: 24%;
        right: 15%;
    }

    .bottom-side-action {
        left: 64%;
        bottom: 30%;
    }

    .left-side-action {
        top: 85%;
        left: 26%;
    }
}
</style>
