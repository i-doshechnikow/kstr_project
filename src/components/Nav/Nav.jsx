import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <a>profile</a>
        </div>
        <div className={s.item}>
          <a>msgs</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <a>news</a>
        </div>
        <div className={s.item}>
          <a>music</a>
        </div>
        <div className={s.item}>
          <a>sttgs</a>
        </div>
      </nav>
      
    )
}

export default Nav;