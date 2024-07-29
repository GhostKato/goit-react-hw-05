import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from 'react';
import { getSearchMovie } from '../../services/fetchTmbd';
import SearchBar from "../../components/SearchBar/SearchBar";
import s from './MoviesPage.module.css';
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const MoviesPage = () => {
  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query') || '';

    if (queryParam) {
      setQuery(queryParam);
    }
  }, [searchParams]);

  
  useEffect(() => {
    if (!query) return;

    const getSearchData = async () => {
      try {
        const data = await getSearchMovie(query);
        setSearchData(data.results);
      } catch (error) {
        toast.error('Request failed. Try again.');
      }
    };

    getSearchData();
  }, [query]);

  
  const handleSubmit = (newQuery) => {    
    setSearchParams(newQuery ? { query: newQuery } : {});
  };

  return (
    <div className={`${s.container} container`}>
      <Toaster position='top-right' /> 
      <SearchBar setQuery={handleSubmit} />
      <MovieList data={searchData} />
    </div>
  );
};

export default MoviesPage;
