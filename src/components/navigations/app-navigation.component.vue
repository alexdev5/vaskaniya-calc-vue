<template>
    <div class="app-navigation-wrapper">
        <div class="vs-navigation">
            <ul class="vs-navigation-links">
                <AppNavLink :to="{ name: RouteName.Dimensions }">
                    <template #icon-prepend>
                        <DimensionsIcon />
                    </template>
                    {{ content.menu.dimensions }}
                </AppNavLink>
                <AppNavLink :to="{ name: RouteName.Edges }">
                    {{ content.menu.edges }}
                </AppNavLink>
                <AppNavLink :to="{ name: RouteName.Palette }">
                    {{ content.menu.palette }}
                </AppNavLink>
                <AppNavLink :to="{ name: RouteName.Sinks }">
                    {{ content.menu.sinks }}
                </AppNavLink>
                <AppNavLink :to="{ name: RouteName.Addons }">
                    {{ content.menu.addons }}
                </AppNavLink>
                <AppNavLink :to="{ name: RouteName.Result }">
                    <template #icon-prepend></template>
                    {{ content.menu.result }}
                </AppNavLink>
            </ul>
        </div>
        <div class="vs-total-wrapper">
            <div class="vs-total">
                <p>Ваша цена:</p>
                <p>{{ price }} {{ currency }}</p>
                <div>
                    <small>Рекомендованная розничная цена</small>
                    <InfoCircleFilledIcon />
                </div>
            </div>
            <div class="vs-total-actions">
                <AppBtn>Сохранить PDF</AppBtn>
                <AppBtn>Отправить нам</AppBtn>
                <AppBtn>Создать КП для клиента</AppBtn>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppNavLink from './components/app-navigation-link.component.vue'
import DimensionsIcon from '@/components/icons/navigation/dimensions.icon.vue'
import AppBtn from '@/components/elements/app-btn/app-btn.component.vue'
import InfoCircleFilledIcon from '@/components/icons/info-circle-filled.icon.vue'

import { content } from '@/content'
import { RouteName } from '@/router'

defineProps<{
    price: number
    currency: string
}>()
</script>
