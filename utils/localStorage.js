import LocalStorage from 'services/LocalStorage'

export const BOOKMARK_KEY = 'color-elephant-bookmarks'

export function getMoviesBookmarks() {
  return LocalStorage.get(BOOKMARK_KEY, [])
}

export function isMovieBookmark(id) {
  return getMoviesBookmarks().includes(id)
}

export function updateMovieBookmark(id) {
  const bookmarks = getMoviesBookmarks()

  if (bookmarks.includes(id)) {
    LocalStorage.set(
      BOOKMARK_KEY,
      bookmarks.filter((bookmark) => bookmark !== id)
    )
    return false
  }
  LocalStorage.set(BOOKMARK_KEY, [...bookmarks, id])
  return true
}
