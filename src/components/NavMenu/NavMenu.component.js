import { useState } from 'react';
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
    setShowMenu(prevState => {
      return !prevState;
    });
  };

  const goToScreen = newScreen => {
    console.log(newScreen);
    setShowMenu(false);
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index, arr) => {
      return (
        <div className='menu-item-container'>
          <div className='menu-item' onClick={() => goToScreen(item.path)}>
            <h2>{item.name}</h2>
          </div>
          {item.submenu &&
            item.submenu.map((item, index, arr) => {
              return (
                <div
                  className='menu-item submenu-item'
                  onClick={() => goToScreen(item.path)}
                >
                  <div className='submenu-list-line' />
                  <h2>
                    <div className='submenu-dot' />
                    {item.name}
                  </h2>
                </div>
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
