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
            setCardDefault()
        } catch (error: any) {
            console.log(error)
        } finally {
            state.loading = false
        }
    }

    function setCardDefault() {
        if (!state.entries) return

        state.selectedProductTypeId = state.entries?.productTypes?.[0]?.id ?? 0

        setTimeout(() => {
            if (
                state.selectedProductTypeId &&
                state.entries!.configurations?.length
            ) {
                state.selectedConfigurationId =
                    state.entries!.configurations.find(
                        (item) =>
                            item.productTypeParentId ===
                            state.selectedProductTypeId
                    )?.id ?? 0
            }
        }, 100)
    }

    const figureSelected = computed(() => {
        if (!state.entries?.figures?.length) return null

        return state.entries.figures.find((figure) =>
            figure.taxonomies.includes(state.selectedConfigurationId)
        )
    })

    watch(
        () => state.selectedProductTypeId,
        () => {
            state.selectedConfigurationId = 0
        }
    )
    return {
        state,
        loadDimensions,
        selectedProductType,
        selectedConfiguration,
        figureSelected,
    }
})
