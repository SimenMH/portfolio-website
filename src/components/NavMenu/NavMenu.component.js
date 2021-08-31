import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const menuItems = [
  { name: 'Home', path: 'home', submenu: false },
  { name: 'About me', path: 'about', submenu: false },
  {
    name: 'Porfolio',
    path: 'portfolio',
    submenu: [
      { name: 'Web', path: 'portfolio/web' },
      { name: 'Mobile', path: 'portfolio/mobile' },
      { name: 'Games', path: 'portfolio/games' },
    ],
    toggled: false,
  },
  { name: 'Contact', path: 'contact', submenu: false },
];

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index, arr) => {
      return (
        <div className='menu-item-container'>
          <Link
            className='menu-item'
            to={item.path}
            onClick={() => setShowMenu(false)}
          >
            <h2>{item.name}</h2>
          </Link>
          {item.submenu &&
            item.submenu.map((item, index, arr) => {
              return (
                <Link
                  className='menu-item submenu-item'
                  to={item.path}
                  onClick={() => setShowMenu(false)}
                >
                  <div className='submenu-list-line' />
                  <h2>
                    <div className='submenu-dot' />
                    {item.name}
                  </h2>
                </Link>
              );
            })}
          {index !== arr.length - 1 && <div className='menu-list-line' />}
        </div>
      );
    });
  };

  return (
    <div className={`menu ${showMenu ? 'menu-show' : ''}`}>
      {/* Menu Button */}
      <div className='menu-button' onClick={toggleMenu}>
        <div className='menu-line-container'>
          <div className='menu-line' />
          <div className='menu-line' />
          <div className='menu-line' />
        </div>
      </div>
      {/* Menu list */}
      <div className='menu-list'>{renderMenuItems()}</div>
    </div>
  );
};

export default NavMenu;
