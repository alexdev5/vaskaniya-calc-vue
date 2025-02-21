<template>
    <div class="vs-navigation">
        <ul class="vs-navigation-links">
            <AppNavLink :to="{ name: RouteName.Dimensions }">
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
                <template #icon-prepend>
                    <IconSettings />
                </template>
                {{ content.menu.result }}
            </AppNavLink>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import AppNavLink from './components/app-navigation-link.component.vue'
import IconSettings from '@/components/icons/IconSettings.vue'

import { content } from '@/content'

import { RouteName } from '@/router'
</script>

<style lang="scss"></style>
