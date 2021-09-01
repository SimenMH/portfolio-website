import './styles.css';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';

import NavMenu from '../../components/NavMenu/NavMenu.component';
import NavArrow from '../../components/NavArrow/NavArrow.component';
import Home from '../Home/Home.screen';
import AboutMe from '../AboutMe/AboutMe.screen';
import Contact from '../Contact/Contact.screen';
import Portfolio from '../Portfolio/Portfolio.screen';
import MobilePortfolio from '../Portfolio/MobilePortfolio/MobilePortfolio.screen';
import WebPortfolio from '../Portfolio/WebPortfolio/WebPortfolio.screen';
import GamePortfolio from '../Portfolio/GamePortfolio/GamePortfolio.screen';

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
    name: 'Web apps',
    up: '/portfolio',
    down: null,
    left: null,
    right: null,
  },
  '/portfolio/mobile': {
    name: 'Mobile apps',
    up: null,
    down: null,
    left: null,
    right: '/portfolio',
  },
  '/portfolio/games': {
    name: 'Video Games',
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
            <Route path='/contact' exact>
              <Contact />
            </Route>
            <Route path='/portfolio' exact>
              <Portfolio />
            </Route>
            <Route path='/portfolio/mobile' exact>
              <MobilePortfolio />
            </Route>
            <Route path='/portfolio/web' exact>
              <WebPortfolio />
            </Route>
            <Route path='/portfolio/games' exact>
              <GamePortfolio />
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
