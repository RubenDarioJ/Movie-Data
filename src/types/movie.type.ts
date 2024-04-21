export interface Movie {
  days_until: number
  following_production: {
    days_until: number
    id: number
    overview: string
    poster_url: string
    release_date: string
    title: string
    type: string
  }
  id: number
  overview: string
  poster_url: string
  release_date: string
  title: string
  type: string
}
