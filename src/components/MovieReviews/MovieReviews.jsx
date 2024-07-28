import { useEffect, useState } from 'react';
import { getReviewsMovie } from '../../services/fetchTmbd';
import { useParams } from 'react-router-dom';
import s from './MovieReviews.module.css';
import toast, { Toaster } from 'react-hot-toast';

const MovieReviews = () => {
  const params = useParams();
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const data = await getReviewsMovie(params.movieId);
        setReviewsData(data.results);
        console.log(data.results);
      } catch (error) {
        toast.error('Request failed. Try again.');
      }
    };

    fetchReviewsData();
  }, [params.movieId]);

  return (
    <div className={s.container}>
      <Toaster position='top-right' />
      <ul className={s.list}>
        {reviewsData.length > 0 ? (
          reviewsData.map(review => (
            <li className={s.item} key={review.id}>            
              <h3 className={s.title}>{review.author}</h3>
              <p className={s.content}>{review.content}</p>
            </li>
          ))
        ) : (
          <h3 className={s.p}>No reviews available</h3>
        )}
      </ul>
    </div>
  );
}

export default MovieReviews;
