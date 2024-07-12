import { FilmOutput } from "./Film"
import { ScreenOutput } from "./Screen"

export interface ScheduleInput {
    startDate: string | null
    endDate: string | null
    fk_screen: number | null
    fk_film: number | null
}

export interface ScheduleOutput {
    startDate: string | null
    endDate: string | null
    screen: ScreenOutput
    film: FilmOutput
}