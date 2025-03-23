import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { dimensionsApi } from '@/services'

import { useDimensionsStore } from '@/views/dimensions/dimensions.store.ts'

export const useLoaderStore = defineStore('loader', () => {
    const state = reactive({})

    const dimensionsStore = useDimensionsStore()

    async function loadDimensions() {
        dimensionsStore.state.loading = true

        try {
            const result = await dimensionsApi.dimensions()

            dimensionsStore.state.entries = result

            console.log(result)
            dimensionsStore.setCardDefault()
        } catch (error: any) {
            console.log(error)
        } finally {
            dimensionsStore.state.loading = false
        }
    }

    return {
        state,
        loadDimensions,
    }
})
