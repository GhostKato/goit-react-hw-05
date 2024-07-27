import MovieList from "../../components/MovieList/MovieList"
import { useEffect, useState } from 'react';
import { getSearchMovie } from '../../services/fetchTmbd';
import SearchBar from "../../components/SearchBar/SearchBar";
import s from './MoviesPage.module.css'

const MoviesPage = () => {

  const [searchData, setSearchData] = useState([]);  
  const [query, setQuery] = useState(''); 

    useEffect(() => {
      const getSearchData = async () => {
          
            try {
                const data  = await getSearchMovie(query);
                setSearchData(data.results);
              console.log(data.results)
              
            } catch (error) {
                console.log(error);
            }
        };

        getSearchData();
    }, [query]);
  
  const handleChangeQuery = newQuery => {
setQuery(newQuery)
  }

  return (
    <div className={`${s.container} container`}>      
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <MovieList data={searchData} />      
    </div>
  )
}

export default MoviesPage