import ApiService from '@/services/main-services/api-service'
import type { Movie } from '@/types/movie.type'

class MovieData {
  async getData(): Promise<{data: Movie}> {
    const data = {
      route: 'https://whenisthenextmcufilm.com/api',
      params: {}
    }
    console.log(data)
    return ApiService.get(data)
  }
}

export default new MovieData()
