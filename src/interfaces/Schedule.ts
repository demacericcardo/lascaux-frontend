import { ScreenOutput } from "./Screen"

export interface ScheduleInput {
    id: number | null
    startDate: string
    endDate: string
    fk_screen: number | null
}

export interface ScheduleOutput {
    id: number
    startDate: string
    endDate: string
    screen: ScreenOutput
}