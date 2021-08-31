import { useState } from 'react';
import './styles.css';

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => {
      return !prevState;
    });
  };

  return (
    <div className={`menu ${showMenu ? 'menu-show' : ''}`}>
      <div className='menu-button' onClick={toggleMenu}>
        <div className='menu-line-container'>
          <div className='menu-line' />
          <div className='menu-line' />
          <div className='menu-line' />
        </div>
      </div>
      <div className='menu-list'></div>
    </div>
  );
};

export default NavMenu;
