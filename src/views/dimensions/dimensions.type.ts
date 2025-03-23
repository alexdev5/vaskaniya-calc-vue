import { TableSideActions } from '@/api/dimensions'

export interface DimensionsAdditionalSize {
    topAction: TableSideActions
    rightAction: TableSideActions
    bottomAction: TableSideActions
    leftAction: TableSideActions
    width?: number
    depth?: number
}

export interface RectangleTable extends DimensionsAdditionalSize {}

export interface StraightWindowsill {
    topAction: TableSideActions
    rightAction: TableSideActions
    bottomAction: TableSideActions
    leftAction: TableSideActions

    width?: number
    depth?: number
    stillDepth?: number // глубина подоконника
    stillWidth?: number // ширина подоконника
}
