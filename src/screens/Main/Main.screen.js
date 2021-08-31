import './styles.css';

import NavArrow from '../../components/NavArrow/NavArrow.component';
import Home from '../Home/Home.screen';
import NavMenu from '../../components/NavMenu/NavMenu.component';

const Main = () => {
  return (
    <div className='page-container'>
      <NavMenu />

      <div className='page-content'>
        <div className='top-container'>
          <NavArrow direction='up' label='Career' />
        </div>
        <div className='center-container'>
          <NavArrow direction='left' label='About me' />
          <Home />
          <NavArrow direction='right' label='Contact' />
        </div>
        <div className='bottom-container'>
          <NavArrow direction='down' label='Portfolio' />
        </div>
      </div>
    </div>
  );
};

export default Main;
