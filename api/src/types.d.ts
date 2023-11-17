import { Weather, Visibility } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export interface City {
  "description": "nubes",
  "temp": 17.79,
  "feels_like": 18.05,
  "pressure": 1015,
  "humidity": 93,
  "speed": 1.34,
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
