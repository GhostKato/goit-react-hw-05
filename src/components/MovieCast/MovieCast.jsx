import { useEffect, useState } from 'react';
import { getCastMovie } from '../../services/fetchTmbd';
import { useParams } from 'react-router-dom';
import s from './MovieCast.module.css';
import toast, { Toaster } from 'react-hot-toast';

const MovieCast = () => {

  const params = useParams();
  const [castData, setCastData] = useState([]);

   useEffect(() => {
        const getCastData = async () => {
            try {
                const data  = await getCastMovie(params.movieId);
                setCastData(data.cast);
                console.log(data.cast)
            } catch (error) {
                toast.error('Request failed. Try again.');
            }
        };

        getCastData();
   }, []);
  
  return (
    <div className={s.container}> 
    <Toaster position='top-right' />  
      <ul className={s.list}>
        {castData.map(cast => (
          <li className={s.item} key={cast.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="Movie Poster"
             onError={(e) => {             
              e.target.closest('li').style.display = 'none';
            }}
            />
            <h3 className={s.title}>{cast.original_name}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieCast