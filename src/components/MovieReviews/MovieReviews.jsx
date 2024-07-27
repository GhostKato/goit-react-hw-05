import { useEffect, useState } from 'react';
import { getReviewsMovie } from '../../services/fetchTmbd';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {

  const params = useParams();
  const [reviewstData, setReviewsData] = useState([]);

   useEffect(() => {
        const getCastData = async () => {
            try {
                const data  = await getReviewsMovie(params.movieId);
                setReviewsData(data);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        };

        getCastData();
   }, []);
  return (
    <div>MovieReviews</div>
  )
}

export default MovieReviews