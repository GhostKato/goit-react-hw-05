import { Link } from 'react-router-dom'

const MovieList = ({data=[]}) => {
  return (
     <div>
      <h4>FilmsList</h4>

      <ul>
        {data.map(movie => (
          <li key={movie.id}>
            <Link to={movie.id.toString()}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path
}`} alt="Movie Poster" />
              <h3>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList