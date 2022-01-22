export interface ResponseCountry {
  code: string
  name: string
  continent: { name: string }
  native: string
}

export interface Country {
  code: string
  name: string
  continent: string
  nativeName: string
}

export type Region =
  | 'Africa'
  | 'North America'
  | 'South America'
  | 'Asia'
  | 'Europe'
  | 'Oceania'

export type RegionFilter = Region | 'None'

export interface CountriesData {
  countries: ResponseCountry[]
}

export interface CountriesResponse {
  data: CountriesData
}

interface ResponseCountryDetais {
  name: string
  continent: { name: Region }
  native: string
  currency: string
  languages: { name: string }[]
  states: { name: string }[]
}

export interface CountryResponse {
  data: { country: ResponseCountryDetais }
}
