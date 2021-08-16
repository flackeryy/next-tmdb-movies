import { useState } from 'react'
import useSWR from 'swr'
import { getMovies } from 'services/api/movies'

function getKey(sort) {
  return `/discover/movie?sort_by=vote_count.${sort}`
}

export default function useMovies(initialData) {
  const [sort, setSort] = useState('desc')

  const { data, error } = useSWR(() => getKey(sort), getMovies, {
    initialData
  })

  const onSort = () => {
    setSort((prevState) => (prevState === 'desc' ? 'asc' : 'desc'))
  }

  return {
    movies: data || [],
    isLoading: !data && !error,
    onSort,
    btnTitle: sort === 'asc' ? 'Low to high rate' : 'High to low rate'
  }
}
