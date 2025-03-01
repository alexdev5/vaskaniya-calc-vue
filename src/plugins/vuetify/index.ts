import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '@/styles/plugins/vuetify/index.scss'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import theme from './theme'

export default createVuetify({
    components: {
        ...components,
        VNumberInput,
    },
    defaults: {
        VBtn: {},
        VSelect: {
            variant: 'outlined',
            density: 'compact',
            color: 'primary',
            hideDetails: 'auto',
            VChip: {
                color: 'primary',
                label: true,
            },
        },
    },
    directives,
    theme,
})
