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
    </div>
</template>

<script lang="ts" setup>
import AppNavLink from './components/app-navigation-link.component.vue'
import DimensionsIcon from '@/components/icons/navigation/dimensions.icon.vue'

import { content } from '@/content'

import { RouteName } from '@/router'
</script>

<style lang="scss"></style>
