import './styles.css';

const NavMenu = () => {
  return (
    <div className='menu'>
      <div className='menu-button'>
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
