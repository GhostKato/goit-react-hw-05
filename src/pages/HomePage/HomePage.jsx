import { useEffect, useState } from 'react';
import { getTrendingMovie } from '../../services/fetchTmbd';
import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css'
import toast, { Toaster } from 'react-hot-toast';

const HomePage = () => {
    const [filmsData, setFilmsData] = useState([]);
    const [page, setPage] = useState(1);
     const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const getFilms = async () => {
            try {
                const data = await getTrendingMovie(page);
              setFilmsData(data.results);
              console.log(data.results);
            } catch (error) {
                toast.error('Request failed. Try again.');
            }
        };

        getFilms();
    }, [page]);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prev => prev - 1);
        }
    };

    const handleNextPage = () => {
        setPage(prev => prev + 1);
    };

     useEffect(() => {
    
      const id = setTimeout(() => {
        setShowButton(true);
      }, 1000);
      return () => {
        clearTimeout(id);
      };
    
  }, []);

    return (
        <div className={`${s.container} container`}>
             <Toaster position='top-right' /> 
            <h2 className={s.title}>Popular movies of the day</h2>
            <MovieList data={filmsData} />
            <div className={s.btnCont}>
                {page > 1 && (
                    <button className={s.button} onClick={handlePrevPage}>
                        Prev
                    </button>
                )}
                {showButton && <button className={s.button} onClick={handleNextPage}>Next</button>}
            </div>
        </div>
    );
};

export default HomePage;
