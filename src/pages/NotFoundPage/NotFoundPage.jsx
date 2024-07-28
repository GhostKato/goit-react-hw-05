import { Link, useNavigate } from "react-router-dom"
import HomePage from "../HomePage/HomePage"
import { useEffect } from "react";
import  s from './NotFoundPage.module.css';

const NotFoundPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    
      const id = setTimeout(() => {
       navigate('/');
      }, 2000);
      return () => {
        clearTimeout(id);
      };
    
  }, []);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Not Found Page</h2>
      <Link className={s.link} to='/'>Back home</Link>
    </div>
  )
}

export default NotFoundPage