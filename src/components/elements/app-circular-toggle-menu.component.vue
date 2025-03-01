<template>
    <div
        class="app-circular-toggle-menu"
        :class="['items-' + filteredRecords.length, isOpened ? 'opened' : '']"
    >
        <AppBtn
            icon
            red
            @click="toggleMenu()"
            :class="{
                active: true,
                [activeComponent.class ?? '']: activeComponent.class,
            }"
        >
            <component :is="activeComponent.icon" />
        </AppBtn>

        <div class="app-circular-toggle-menu-container">
            <template v-for="record in filteredRecords">
                <AppBtn
                    v-if="record.value !== modelValue"
                    icon
                    red
                    @click="selectItem(record)"
                    :class="{ [record.class ?? '']: record.class }"
                >
                    <component :is="record.icon" />
                </AppBtn>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppBtn from '@/components/elements/app-btn/app-btn.component.vue'
import PlusIcon from '@/components/icons/plus.icon.vue'
import IconSquareRed from '@/components/icons/dimensions/IconSquareRed.vue'
import IconCircleRed from '@/components/icons/dimensions/IconCircleRed.vue'

import { TableSideActions } from '@/api/dimensions'
import { computed, ref } from 'vue'
import IconCircleRedFilled from '@/components/icons/dimensions/IconCircleRedFilled.vue'
import IconSquareRedFilled from '@/components/icons/dimensions/IconSquareRedFilled.vue'
import IconTriangleRed from '@/components/icons/dimensions/IconTriangleRed.vue'

interface MenuItem {
    icon: any
    value: TableSideActions
    class?: string
}

const props = defineProps<{
    modelValue: TableSideActions
    exclude?: TableSideActions[]
}>()

const emit = defineEmits(['update:modelValue'])

const selectedItem = ref<TableSideActions>(props.modelValue)

const records = [
    {
        icon: IconSquareRed,
        value: TableSideActions.IntegratedSkirtingBoard,
    },
    { icon: IconSquareRedFilled, value: TableSideActions.FaceWithChamfer },
    { icon: IconCircleRedFilled, value: TableSideActions.BendWithChamfer },
    { icon: IconCircleRed, value: TableSideActions.AttachedSkirtingBoard },
    { icon: PlusIcon, value: TableSideActions.None, class: 'vs-plus' },
    { icon: IconTriangleRed, value: TableSideActions.FaceWithoutChamfer },
]

const filteredRecords = computed(() => {
    return records.filter((record) => !props.exclude?.includes(record.value))
})

const activeComponent = computed<MenuItem>(
    () =>
        filteredRecords.value.find(
            (record) => record.value === props.modelValue
        ) as MenuItem
)

const isOpened = ref(false)

function selectItem(item: MenuItem) {
    selectedItem.value = item.value
    isOpened.value = false
    emit('update:modelValue', selectedItem.value)
}

function toggleMenu() {
    isOpened.value = !isOpened.value
}
</script>

<style lang="scss">
.app-circular-toggle-menu {
    position: relative;
    width: 32px;

    .app-btn {
        border-radius: 50% !important;
        transition: all 0.2s linear;

        &:not(.active) {
            --v-btn-height: 12px;
            position: absolute;

            top: 0;
            left: 0;
            opacity: 0;
            z-index: -1;
        }

        &.active {
            --v-btn-height: 18px;
            position: relative;
            top: 0 !important;
            left: 0 !important;
            z-index: 200;
        }

        svg:not(.icon-plus) {
            path {
                fill: #fff;
            }
        }
    }

    &.opened {
        .app-btn:not(.active) {
            z-index: 100;
        }

        .app-btn {
            opacity: 1;

            .icon-square-red {
                background: #fff;
            }
        }

        &.items-6 {
            .app-btn:first-child {
                left: -99%;
                top: 17%;
            }

            .app-btn:nth-child(2) {
                left: -78%;
                top: -77%;
            }

            .app-btn:nth-child(3) {
                left: 9%;
                top: -103%;
            }

            .app-btn:nth-child(4) {
                left: 96%;
                top: -82%;
            }

            .app-btn:last-child {
                right: -99%;
                top: 17%;
                left: auto;
            }
        }
    }
}
</style>
