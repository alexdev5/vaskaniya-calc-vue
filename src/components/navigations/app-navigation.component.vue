<template>
    <div class="app-navigation-wrapper">
        <div class="app-navigation">
            <div class="vs-navigation">
                <ul class="vs-navigation-links">
                    <AppNavLink :to="{ name: RouteName.Dimensions }">
                        <template #icon-prepend>
                            <DimensionsIcon />
                        </template>
                        {{ content.menu.dimensions }}
                    </AppNavLink>
                    <AppNavLink :to="{ name: RouteName.Edges }">
                        <template #icon-prepend>
                            <EdgesIcon />
                        </template>
                        {{ content.menu.edges }}
                    </AppNavLink>
                    <AppNavLink :to="{ name: RouteName.Palette }">
                        <template #icon-prepend>
                            <PaletteIcon />
                        </template>
                        {{ content.menu.palette }}
                    </AppNavLink>
                    <AppNavLink :to="{ name: RouteName.Sinks }">
                        <template #icon-prepend>
                            <SinksIcon />
                        </template>
                        {{ content.menu.sinks }}
                    </AppNavLink>
                    <AppNavLink :to="{ name: RouteName.Addons }">
                        <template #icon-prepend>
                            <AddonsIcon />
                        </template>
                        {{ content.menu.addons }}
                    </AppNavLink>
                    <AppNavLink :to="{ name: RouteName.Result }">
                        <template #icon-prepend>
                            <ResultIcon />
                        </template>
                        {{ content.menu.result }}
                    </AppNavLink>
                </ul>
            </div>
            <div class="vs-total-wrapper">
                <div class="vs-total">
                    <p>Ваша цена:</p>
                    <p>{{ price }} {{ currency }}</p>
                    <div class="vs-total-description">
                        <small>Рекомендованная розничная цена</small>
                        <InfoCircleFilledIcon />
                    </div>
                </div>
                <div class="vs-total-actions">
                    <AppBtn green>Сохранить PDF</AppBtn>
                    <AppBtn outlined>Отправить нам</AppBtn>
                    <AppBtn outlined>Создать КП для клиента</AppBtn>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppNavLink from './components/app-navigation-link.component.vue'
import DimensionsIcon from '@/components/icons/navigation/dimensions.icon.vue'
import AppBtn from '@/components/elements/app-btn/app-btn.component.vue'
import InfoCircleFilledIcon from '@/components/icons/info-circle-filled.icon.vue'
import EdgesIcon from '@/components/icons/navigation/edges.icon.vue'
import PaletteIcon from '@/components/icons/navigation/palette.icon.vue'
import SinksIcon from '@/components/icons/navigation/sinks.icon.vue'
import AddonsIcon from '@/components/icons/navigation/addons.icon.vue'
import ResultIcon from '@/components/icons/navigation/result.icon.vue'

import { content } from '@/content'
import { RouteName } from '@/router'

defineProps<{
    price: number
    currency: string
}>()
</script>
