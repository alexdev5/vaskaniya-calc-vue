import { PostContracts, TermContracts } from '@/api'

export interface DimensionsContract {
    taxonomy: TermContracts.TaxonomyName
    parent: TermContracts.TermContract
    productTypes: TermContracts.TermContract[]
    configurations: ConfigurationContract[]
    figures: PostContracts.PostContract[]
}

export interface ConfigurationContract extends TermContracts.TermContract {
    productTypeParentId: number | null
}

export interface CreateFigureCommand {
    title?: string
    btnLabel: string
    taxonomy: string
    taxonomies: number[]
    area?: string // in m2
    notification?: string
}

export interface UpdateFigureCommand {
    id: number
    title?: string
    btnLabel: string
    area?: string // in m2
    notification?: string
}

export enum TableSideActions {
    None, // Лицо с фаской
    FaceWithChamfer, // Лицо с фаской
    AttachedSkirtingBoard, // Плинтус приставной
    BendWithChamfer, // Подгиб с фаской
    IntegratedSkirtingBoard, // Плинтус интегрированный
    FaceWithoutChamfer, // Лицо без фаски
}

// Столеншицы. Используется ACF поле "name" в категории
export enum Countertops {
    Rectangle = 'rectangle',
    StraightWindowsill = 'straight-windowsill', // прямая + подоконник
    PShapedBarCounter = 'p-shaped-bar-counter', // П-образная + барная стойка
    GShaped = 'g-shaped', // Г-образная
    PShaped = 'p-shaped', // П-образная
    PShapedWindowsill = 'p-shaped-windowsill', // П-образная + подоконник
    GShapedWindowsill = 'g-shaped-windowsill', // Г-образная + подоконник
    PShapedBarCounterWindowsill = 'p-shaped-bar-counter-windowsill', // П-образная + барная стойка + подоконник
    Circle = 'circle', // круглая
}

// Подоконники.
export enum windowSills {
    straight = 'straight', // Прямой
    mirror = 'mirror', // Зеркальный
    angular = 'angular', // Угловой
}

// Барные стойки.
export enum BarCounters {}

// Фартуки
export enum Backsplashes {}

// Умывальники
export enum Washbasins {}

// Арт-объект
export enum ArtObject {}
