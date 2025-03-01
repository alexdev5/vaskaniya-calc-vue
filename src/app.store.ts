import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useDimensionsStore = defineStore('app', () => {
    const state = reactive({})
    return {
        state,
    }
})
