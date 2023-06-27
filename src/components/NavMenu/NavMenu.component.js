import './styles.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Home', path: '/', submenu: false },
  { name: 'About me', path: '/about', submenu: false },
  // {
  //   name: 'Porfolio',
  //   path: '/portfolio',
  //   submenu: [
  //     { name: 'Web apps', path: '/portfolio/web' },
  //     { name: 'Mobile apps', path: '/portfolio/mobile' },
  //     { name: 'Video Games', path: '/portfolio/games' },
  //   ],
  // },
  { name: 'Contact', path: '/contact', submenu: false },
];

const NavMenu = () => {
  const curPath = useLocation().pathname;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const renderMenuItems = () => {
    return menuItems.map((item, idx, arr) => {
      return (
        <div key={idx}>
          <Link
            className={`nav-menu-list__item ${
              item.path === curPath ? 'nav-menu-list__item--active' : ''
            }`}
            to={item.path}
            onClick={() => setShowMenu(false)}
          >
            <h2>{item.name}</h2>
          </Link>
          {item.submenu &&
            item.submenu.map((item, idx) => {
              return (
                <Link
                  className={`nav-menu-list__item nav-menu-list__submenu__item ${
                    item.path === curPath ? 'nav-menu-list__item--active' : ''
                  }`}
                  to={item.path}
                  onClick={() => setShowMenu(false)}
                  key={idx}
                >
                  <div className='nav-menu-list__submenu__separator' />
                  <h2>
                    <div className='nav-menu-list__submenu__dot' />
                    {item.name}
                  </h2>
                </Link>
              );
            })}
          {idx !== arr.length - 1 && (
            <div className='nav-menu-list__separator' />
          )}
        </div>
      );
    });
  };

  return (
    <div className={`nav-menu ${showMenu ? 'nav-menu--show' : ''}`}>
      {/* Menu Button */}
      <div className='nav-menu__expand-button' onClick={toggleMenu}>
        <div className='nav-menu__expand-button__line-container'>
          <div className='nav-menu__expand-button__line' />
          <div className='nav-menu__expand-button__line' />
          <div className='nav-menu__expand-button__line' />
        </div>
      </div>
      {/* Menu list */}
      <div className='nav-menu-list'>{renderMenuItems()}</div>
    </div>
  );
};

export default NavMenu;
