import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./Navigation/Navigation";
import Loading from "./Loading/Loading";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

function App() {  

  return (
    <>      
      <Navigation />
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />

         <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={ <MovieCast/>} />
           <Route path='reviews' element={ <MovieReviews/>} />
          </Route>       
        
        <Route path='*' element={<NotFoundPage />} />
        </Routes>
        </Suspense>
    </>
  );
}

export default App;
