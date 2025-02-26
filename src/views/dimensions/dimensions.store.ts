import { defineStore } from 'pinia'
import { computed, reactive, watch } from 'vue'
import { dimensionsApi } from '@/services'
import { DimensionsContract } from '@/api/dimensions'
import { TermContract } from '@/api/terms/term.contracts.ts'

export const useDimensionsStore = defineStore('dimensions', () => {
    const state = reactive({
        entries: null as DimensionsContract | null,
        // taxonomy: '' as TermContracts.TaxonomyName,
        // parent: null as TermContract | null,
        // productTypes: null as TermContract[] | null,
        // configurations: null as TermContract[] | null,
        // figures: null as PostContracts.PostContract[] | null,

        loading: false,
        selectedProductTypeId: 0 as number,
        selectedConfigurationId: 0 as number,
    })

    const selectedProductType = computed((): TermContract | null => {
        if (!state.entries?.productTypes?.length) return null

        return (
            state.entries.productTypes.find(
                (item) => item.id === state.selectedProductTypeId
            ) ?? null
        )
    })

    const selectedConfiguration = computed((): TermContract | null => {
        if (!state.entries?.configurations?.length) return null

        return (
            state.entries.configurations.find(
                (item) => item.id === state.selectedConfigurationId
            ) ?? null
        )
    })

    async function loadDimensions() {
        state.loading = true

        try {
            const result = await dimensionsApi.dimensions()

            state.entries = result

            console.log(result)
            // state.productTypes = (result.productTypes ?? []).map(
            // 	productType => new TermState(productType),
            // )
            // state.configurations = (result.configurations ?? []).map(
            // 	configuration => new TermState(configuration),
            // )
            // state.figures = result.figures
        } catch (error: any) {
            console.log(error)
        } finally {
            state.loading = false
        }
    }

    function setCardDefault() {
        //state.selectedProductTypeId = state.productTypes?.[0]?.id ?? 0
        // watch fix
        // setTimeout(() => {
        // 	if (state.selectedProductTypeId && state.configurations?.length) {
        // 		state.selectedConfigurationId = state.configurations.find(
        // 			item => item.productTypeParentId === state.selectedProductTypeId,
        // 		)?.id ?? 0
        // 	}
        // }, 100)
    }

    watch(
        () => state.selectedProductTypeId,
        () => {
            state.selectedConfigurationId = 0
        }
    )
    return {
        state,
        loadDimensions,
        setCardDefault,
        selectedProductType,
        selectedConfiguration,
    }
})
