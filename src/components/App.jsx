import { Route, Routes } from "react-router-dom";


import { MdNoFood } from "react-icons/md";
import Navigation from "./Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";

function App() {  

  return (
    <>      
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/:movieId' element={<MovieDetailsPage />}/>
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={ <MovieCast/>} />
           <Route path='reviews' element={ <MovieReviews/>} />
          </Route>       
        
        <Route path='*' element={<MdNoFood />} />
      </Routes>
    </>
  );
}

export default App;
