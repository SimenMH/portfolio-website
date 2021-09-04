import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const menuItems = [
  { name: 'Home', path: '/', submenu: false },
  { name: 'About me', path: '/about', submenu: false },
  {
    name: 'Porfolio',
    path: '/portfolio',
    submenu: [
      { name: 'Web apps', path: '/portfolio/web' },
      { name: 'Mobile apps', path: '/portfolio/mobile' },
      { name: 'Video Games', path: '/portfolio/games' },
    ],
  },
  { name: 'Contact', path: '/contact', submenu: false },
];

const NavMenu = () => {
  const curPath = useLocation().pathname;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index, arr) => {
      return (
        <div className='menu-item-container'>
          <Link
            className={`menu-item ${
              item.path === curPath ? 'current-menu-item' : ''
            }`}
            to={item.path}
            onClick={() => setShowMenu(false)}
          >
            <h2>{item.name}</h2>
          </Link>
          {item.submenu &&
            item.submenu.map(item => {
              return (
                <Link
                  className={`menu-item submenu-item ${
                    item.path === curPath ? 'current-menu-item' : ''
                  }`}
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
