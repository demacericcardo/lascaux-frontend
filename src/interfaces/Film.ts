import { FilmGenre } from "../enums/FilmGenre"

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
    schedules: FilmSchedule[]
}

export interface FilmSchedule {
    screenId: number
    screenName: string
    startDate: string
    endDate: string
}