import ApiService from '@/services/main-services/api-service'
import type { Movie } from '@/types/movie.type'

class MovieData {
  async getData({ date }: any): Promise<{data: Movie}> {
    const data = {
      route: 'https://whenisthenextmcufilm.com/api',
      params: <any>{}
    }

    if (date) {
      data.params.date = date
    }

    return ApiService.get(data)
  }
}

export default new MovieData()
