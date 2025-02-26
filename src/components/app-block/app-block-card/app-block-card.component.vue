<template>
    <div class="app-block-card">
        <div class="app-block-card-image">
            <img :src="thumbnail" alt="" />
        </div>
        <div class="app-block-card-label" v-if="label">
            {{ label }}
        </div>
        <!-- <div class="app-block-card-description" v-if="record.description">
			 {{ record.description }}
		 </div>
		 <div class="app-block-card-price" v-if="record.acf?.price">
			 {{ record.acf.price }}
		 </div>-->
    </div>
</template>

<script lang="ts" setup>
import { TermContract } from '@/api/terms/term.contracts.ts'
import { Config } from '@/config'

const props = defineProps<{
    record: TermContract
    label?: string
}>()

const thumbnail = Config.getImageUrl(props.record.acf.thumbnail?.url)
</script>

<style lang="scss">
@import './app-block-card';
</style>
