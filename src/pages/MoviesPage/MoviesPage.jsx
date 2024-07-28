import MovieList from "../../components/MovieList/MovieList"
import { useEffect, useState } from 'react';
import { getSearchMovie } from '../../services/fetchTmbd';
import SearchBar from "../../components/SearchBar/SearchBar";
import s from './MoviesPage.module.css'
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const MoviesPage = () => {

  const [searchData, setSearchData] = useState([]);  
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const fetchQuery = searchParams.get('query') ?? query;  

    useEffect(() => {
      const getSearchData = async () => {
          
            try {
                const data  = await getSearchMovie(fetchQuery);
                setSearchData(data.results);
              console.log(data.results)
              
            } catch (error) {
                toast.error('Request failed. Try again.');
            }
        };

        getSearchData();
    }, [query]);
  
  const handleChangeQuery = newQuery => {
    setQuery(newQuery);
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  }

  return (
    <div className={`${s.container} container`}>
      <Toaster position='top-right' /> 
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <MovieList data={searchData} />      
    </div>
  )
}

export default MoviesPage