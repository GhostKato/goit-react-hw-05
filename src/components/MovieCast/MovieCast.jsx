import { useEffect, useState } from 'react';
import { getCastMovie } from '../../services/fetchTmbd';
import { useParams } from 'react-router-dom';

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
                console.log(error);
            }
        };

        getCastData();
   }, []);
  
  return (
    <div>
      <h4>MovieCast</h4>
      <ul>
        {castData.map(cast => (
          <li key={cast.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="Movie Poster" />
            <h3>{cast.original_name}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieCast