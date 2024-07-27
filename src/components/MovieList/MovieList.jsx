import { Link } from 'react-router-dom'
import s from './MovieList.module.css'

const MovieList = ({data=[]}) => {
  return (         

      <ul className={s.list}>
        {data.map(movie => (
          <li className={s.item} key={movie.id}>
            <Link className={s.link} to={movie.id.toString()}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster" />
              <div className={s.textCont}><h3 className={s.title}>{movie.title}</h3></div>
            </Link>
          </li>
        ))}
      </ul>
    
  )
}

export default MovieList