import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAppStore = defineStore('app', () => {
    const state = reactive({})
    return {
        state,
    }
})
