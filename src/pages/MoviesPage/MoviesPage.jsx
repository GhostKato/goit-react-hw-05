import MovieList from "../../components/MovieList/MovieList"
import { useEffect, useState } from 'react';
import { getSearchMovie } from '../../services/fetchTmbd';
import SearchBar from "../../components/SearchBar/SearchBar";
import s from './MoviesPage.module.css'
import { useSearchParams } from "react-router-dom";

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
                console.log(error);
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
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <MovieList data={searchData} />      
    </div>
  )
}

export default MoviesPage