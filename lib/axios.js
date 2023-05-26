import axios from 'axios'

export const fetchAxios = axios.create({
  baseURL: 'https://opentdb.com/api.php'
})
