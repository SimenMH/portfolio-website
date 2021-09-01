import './styles.css';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';

import NavMenu from '../../components/NavMenu/NavMenu.component';
import NavArrow from '../../components/NavArrow/NavArrow.component';
import Home from '../Home/Home.screen';
import AboutMe from '../AboutMe/AboutMe.screen';

const navigation = {
  '/': {
    name: 'Home',
    up: null,
    down: '/portfolio',
    left: '/contact',
    right: '/about',
  },
  '/about': {
    name: 'About Me',
    up: null,
    down: null,
    left: '/',
    right: null,
  },
  '/contact': {
    name: 'Contact',
    up: null,
    down: null,
    left: null,
    right: '/',
  },
  '/portfolio': {
    name: 'Portfolio',
    up: '/',
    down: '/portfolio/web',
    left: '/portfolio/mobile',
    right: '/portfolio/games',
  },
  '/portfolio/web': {
    name: 'Web',
    up: '/portfolio',
    down: null,
    left: null,
    right: null,
  },
  '/portfolio/mobile': {
    name: 'Mobile',
    up: null,
    down: null,
    left: null,
    right: '/portfolio',
  },
  '/portfolio/games': {
    name: 'Games',
    up: null,
    down: null,
    left: '/portfolio',
    right: null,
  },
};

const Main = () => {
  const curPath = useLocation().pathname;

  const renderNavArrow = dir => {
    const toPath = navigation[curPath][dir];
    if (toPath) {
      const label = navigation[toPath].name;
      return <NavArrow direction={dir} label={label} path={toPath} />;
    }
  };

  return (
    <div className='page-container'>
      <NavMenu />

      <div className='page-content'>
        <div className='top-container'>{renderNavArrow('up')}</div>
        <div className='center-container'>
          {renderNavArrow('left')}
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/about' exact>
              <AboutMe />
            </Route>
            <Redirect from='*' to='/' />
          </Switch>
          {renderNavArrow('right')}
        </div>
        <div className='bottom-container'>{renderNavArrow('down')}</div>
      </div>
    </div>
  );
};

export default Main;
