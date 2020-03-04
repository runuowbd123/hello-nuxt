
import axios from 'axios'

export default {
    getData(params) {
      return axios.get('https://api.tvmaze.com/search/shows?q=batman', params)
    },
    getDataIn(params) {
      return axios.get('/search/shows?q=batman', params)
    },
  }