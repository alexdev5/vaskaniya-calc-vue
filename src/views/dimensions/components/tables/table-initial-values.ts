import {
    RectangleTable,
    StraightWindowsill,
} from '@/views/dimensions/dimensions.type.ts'
import { Countertops, TableSideActions } from '@/api/dimensions'

export type TableInitialTypes = {
    [Countertops.Rectangle]: RectangleTable
    [Countertops.StraightWindowsill]: StraightWindowsill
}

export const TableInitialValues: {
    [K in keyof TableInitialTypes]: () => TableInitialTypes[K]
} = {
    [Countertops.Rectangle]: () => ({
        topAction: TableSideActions.None,
        rightAction: TableSideActions.None,
        bottomAction: TableSideActions.None,
        leftAction: TableSideActions.None,
        width: undefined,
        depth: undefined,
    }),
    [Countertops.StraightWindowsill]: () => ({
        topAction: TableSideActions.None,
        rightAction: TableSideActions.None,
        bottomAction: TableSideActions.None,
        leftAction: TableSideActions.None,
        width: undefined,
        depth: undefined,
        stillDepth: undefined,
        stillWidth: undefined,
    }),
}
