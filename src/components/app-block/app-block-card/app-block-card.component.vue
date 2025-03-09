<template>
    <div class="app-block-card">
        <div class="app-block-card-image">
            <img class="image" :src="thumbnail" alt="" />
        </div>
        <div class="app-block-card-label" v-if="label">
            {{ label }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { TermContract } from '@/api/terms/term.contracts.ts'
import { ImageHelper } from '@/config'
import { computed } from 'vue'

const props = defineProps<{
    record: TermContract
    active?: boolean
    label?: string
}>()

const thumbnail = computed(() => {
    return props.active && props.record.acf.thumbnailActive?.url
        ? ImageHelper.getImage(props.record.acf.thumbnailActive?.url)
        : ImageHelper.getImage(props.record.acf.thumbnail?.url)
})
</script>

<style lang="scss">
@import './app-block-card';
</style>
