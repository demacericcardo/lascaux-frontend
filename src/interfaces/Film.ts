import { FilmGenre } from "../enums/FilmGenre"
import { ScheduleOutput } from "./Schedule"

export interface FilmInput {
    title: string
    director: string
    description: string | null
    genre: FilmGenre
    minuteLenght: number
}

export interface FilmOutput {
    id: number
    title: string
    director: string
    description: string | null
    genre: FilmGenre
    minuteLenght: number
    schedule: ScheduleOutput | null
}