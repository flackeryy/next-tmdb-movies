import Api from 'services/Api'

export async function getMovies(url) {
  const response = await Api.get(url)
  return response.data.results
}
