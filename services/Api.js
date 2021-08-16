import axios from 'axios'
import { ACCESS_TOKEN, API_URL } from 'config'

const config = {
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json; charset=utf-8'
  }
}

class Api {
  constructor() {
    this.instance = axios.create(config)
  }
  get(url) {
    return this.instance.get(url)
  }
}

export default new Api()
