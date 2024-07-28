import { Link, useLocation } from 'react-router-dom'
import s from './MovieList.module.css'

const MovieList = ({ data = [] }) => {
  
  const location = useLocation();

  return (

    <ul className={s.list}>
      {data.map(movie => (
      
          <li className = { s.item } key = { movie.id } >
      <Link className={s.link} to={`/movies/${movie.id.toString()}`} state={location}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster"
             onError={(e) => {             
              e.target.closest('li').style.display = 'none';
            }}
/>
      </Link>
          </li>
         
        ))}
    </ul>    
    
  )
}

export default MovieList