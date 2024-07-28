import { Suspense, useEffect, useRef, useState } from 'react';
import { getDetalsMovie } from '../../services/fetchTmbd';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import s from './MovieDetailsPage.module.css'
import clsx from 'clsx';
import Loading from '../../components/Loading/Loading';
import toast, { Toaster } from 'react-hot-toast';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
    
    const params = useParams();
    const [detalsData, setDetalsData] = useState(null);
    const location = useLocation();
    const goBackRef = useRef(location?.state || '/movies');

    useEffect(() => {
        const getDetals = async () => {
            try {
                const data = await getDetalsMovie(params.movieId);
                setDetalsData(data);
                console.log(data);
            } catch (error) {
                toast.error('Request failed. Try again.');
            }
        };

        getDetals();
    }, []);

    return (
        <div className={s.section}>
            <Toaster position='top-right' /> 
                {detalsData && (
                <div className={`${s.container} container`}>
                    <Link className={s.link} to={goBackRef.current}>Go back</Link>                   
                       
                            <h2 className={s.title}>{detalsData.title}</h2>
                        <p className={s.pText}>{detalsData.release_date}</p>
                         <div className={s.content}>
                       <div className={s.img}>
                            <img src={`https://image.tmdb.org/t/p/w500/${detalsData.backdrop_path}`} alt="Movie Poster" />
                       </div>
                        <div className={s.textContent}>
                           <div className={s.overviewContainer}>
                                <h4 className={s.titleText}>Overview</h4>
                                <p className={s.pText}>{detalsData.overview}</p>
                           </div>
                            <div className={s.genresContainer}>
                                <h4 className={s.titleText}>Genres</h4>
                                 {detalsData.genres.map(genre => (
                                     <p className={s.pText} key={genre.id}>{genre.name}</p>  
                                 ))}
                            </div >
                        </div>
                    </div>
                    <div className={s.linklBtn}> 
                        <NavLink className={buildLinkClass} to='cast'>Cast</NavLink>
                        <NavLink className={buildLinkClass} to='reviews'>Reviews</NavLink>                        
                    </div>
                    <Suspense fallback={<Loading/>}> 
                    <Outlet />
                    </Suspense>
                </div>
            )}
        </div>
    );
};

export default MovieDetailsPage;
