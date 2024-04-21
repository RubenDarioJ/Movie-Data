import axios from 'axios'

const http = axios.create({
  baseURL: 'https://whenisthenextmcufilm.com/api',
})

export default http