import { isBrowser } from 'utils/next'

class LocalStorage {
  get(key, defaultValue) {
    const value = isBrowser() && window.localStorage.getItem(key)
    return value ? JSON.parse(value) : defaultValue
  }
  set(key, value) {
    isBrowser() && window.localStorage.setItem(key, JSON.stringify(value))
  }
  remove(key) {
    isBrowser() && window.localStorage.removeItem(key)
  }
  clear() {
    isBrowser() && window.localStorage.clear()
  }
}

export default new LocalStorage()
