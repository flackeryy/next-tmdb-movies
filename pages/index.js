import Api from 'services/Api'
import MovieCard from 'components/MovieCard'
import useMovies from 'hooks/useMovies'

export default function Home({ data }) {
  const { movies, onSort, btnTitle } = useMovies(data)
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl pt-8 px-8 md:px-0">
        <button className="btn w-full" onClick={onSort}>
          {btnTitle}
        </button>
      </div>

      <ul className="flex flex-col items-center py-8 max-w-2xl">
        {movies.map((row) => (
          <MovieCard
            id={row['id']}
            key={row['id']}
            title={row['title']}
            rate={row['vote_average']}
            date={row['release_date']}
            posterPath={row['poster_path']}
          />
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const response = await Api.get('/discover/movie?sort_by=vote_count.desc')
    return {
      props: {
        data: response.data.results
      }
    }
  } catch (e) {
    return {
      props: {
        error: true
      }
    }
  }
}
