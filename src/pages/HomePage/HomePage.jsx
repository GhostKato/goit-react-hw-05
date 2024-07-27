import { useEffect, useState } from 'react';
import { getTrendingMovie } from '../../services/fetchTmbd';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
    const [filmsData, setFilmsData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getFilms = async () => {
            try {
                const data = await getTrendingMovie(page);
              setFilmsData(data.results);
              console.log(data.results);
            } catch (error) {
                console.log(error);
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

    return (
        <div>
            <h3>Home</h3>
            <MovieList data={filmsData} />
            <div>
                <button onClick={handlePrevPage} disabled={page === 1}>Prev</button>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
};

export default HomePage;
