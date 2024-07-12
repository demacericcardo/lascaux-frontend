import { ScheduleOutput } from "./Schedule"

export interface ScreenInput {
    name: string
    hasIMAX: boolean
    capacity: number
}

export interface ScreenOutput {
    id: number
    name: string
    hasIMAX: boolean
    capacity: number
    schedules: ScheduleOutput[]
}

export interface ScreenOutputNoRef {
    id: number
    name: string
    hasIMAX: boolean
    capacity: number
}