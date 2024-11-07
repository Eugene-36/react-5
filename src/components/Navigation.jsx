import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AppBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Navigation = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to='/' className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to='/movies' className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
