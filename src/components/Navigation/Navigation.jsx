import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};


const Navigation = () => {
  return (
    <header className={s.header}>
      <div className={`${s.container} container`}>
        <NavLink className={buildLinkClass} to='/'>Home</NavLink>
          <NavLink className={buildLinkClass} to='/movies'>Movies</NavLink></div>
    </header>
  )
}

export default Navigation