import { formatDate } from 'utils/date'
import BookmarkIcon from 'components/icons/BookmarkIcon'
import StarIcon from 'components/icons/StarIcon'
import { getPath } from 'utils/images'
import { useEffect, useState } from 'react'
import { isMovieBookmark, updateMovieBookmark } from 'utils/localStorage'

export default function MovieCard({ id, title, rate, date, posterPath }) {
  const [bookmark, setBookmark] = useState(false)

  // because of Next.js initial render on server, need to use useEffect
  // to update state, cannot use useState(isMovieBookmark(id))
  // this useEffect properly runs on client
  useEffect(() => {
    setBookmark(isMovieBookmark(id))
  }, [])

  const handleBookmark = () => {
    const newBookmark = updateMovieBookmark(id)
    setBookmark(newBookmark)
  }

  return (
    <li className="flex w-full overflow-x-hidden md:mb-8 last:mb-0 md:rounded-xl md:shadow-xl">
      <div className="w-1/3 md:w-1/4">
        {posterPath ? (
          <img
            className="w-full h-full"
            src={getPath(posterPath)}
            alt="poster"
          />
        ) : (
          <img
            className="w-full h-full"
            src="https://via.placeholder.com/200x252.png"
            alt=""
          />
        )}
      </div>
      <div className="w-2/3 md:w-3/4 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-lg font-semibold text-gray-500 mb-1">
          {date ? formatDate(date) : 'No release date'}
        </p>
        <p className="font-semibold text-gray-500 mb-4 flex">
          <StarIcon className="rate-star" />
          <span>{rate} / 10</span>
        </p>

        <div className="flex space-x-3">
          <button
            className="btn-bookmark"
            type="button"
            aria-label="like"
            onClick={handleBookmark}
            data-active={bookmark}
          >
            <BookmarkIcon solid={bookmark} />
          </button>

          <a
            className="block"
            href={`https://www.themoviedb.org/movie/${id}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn" type="submit">
              View in listing
            </button>
          </a>
        </div>
      </div>
    </li>
  )
}
