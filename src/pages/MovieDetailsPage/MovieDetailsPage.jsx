import { useEffect, useState } from 'react';
import { getDetalsMovie } from '../../services/fetchTmbd';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
    
    const params = useParams();
    const [detalsData, setDetalsData] = useState(null);

    useEffect(() => {
        const getDetals = async () => {
            try {
                const data = await getDetalsMovie(params.movieId);
                setDetalsData(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

        getDetals();
    }, []);

    return (
        <div>
            <h3>Film Details</h3>
            {detalsData && (
                <div>
                    <h2>{detalsData.title}</h2>
                    <p>{detalsData.release_date}</p>
                    <img src={`https://image.tmdb.org/t/p/w500/${detalsData.backdrop_path}`} alt="Movie Poster" />
                    <h4>Overview</h4>
                    <p>{detalsData.overview}</p>
                    <h4>Genres</h4>
                     {detalsData.genres.map(genre => (
                         <p key={genre.id}>{genre.name}</p>  
                     ))}
                    <div>
                        <NavLink to='cast'>Cast</NavLink>
                        <NavLink to='reviews'>Reviews</NavLink>
                    </div>
                    <Outlet/>
                </div>
            )}
        </div>
    );
};

export default MovieDetailsPage;
