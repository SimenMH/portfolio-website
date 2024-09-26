import { useState } from 'react';
import {
  Route,
  Redirect,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';

import NavMenu from './components/NavMenu/NavMenu.component';
import NavArrow from './components/NavArrow/NavArrow.component';
import Home from './screens/Home/Home.screen';
import AboutMe from './screens/AboutMe/AboutMe.screen';
import Contact from './screens/Contact/Contact.screen';
import Portfolio from './screens/Portfolio/Portfolio.screen';

const navigation = {
  '/': {
    name: 'Home',
    left: '/contact',
    right: '/about',
  },
  '/about': {
    name: 'About Me',
    left: '/',
  },
  '/contact': {
    name: 'Contact',
    right: '/',
  },
  '/portfolio': {
    name: 'Portfolio',
    up: '/',
  },
};

const App = () => {
  const history = useHistory();
  const curPath = useLocation().pathname;
  const [transition, setTransition] = useState({
    animate: false,
    direction: null,
  });

  const renderNavArrow = dir => {
    if (navigation[curPath] && navigation[curPath][dir]) {
      const toPath = navigation[curPath][dir];
      const label = navigation[toPath].name;
      return (
        <NavArrow
          direction={dir}
          label={label}
          path={toPath}
          onClickHandler={startTransition}
          fade={transition.animate}
        />
      );
    }
  };

  const goToScreen = dir => {
    history.push(navigation[curPath][dir]);
  };

  const startTransition = direction => {
    if (!transition.animate) {
      setTransition({ animate: true, direction });
    }
  };

  return (
    <div className='page-container'>
      <NavMenu />
      <div className='page-container__arrow-container'>
        {renderNavArrow('up')}
        {renderNavArrow('down')}
        {renderNavArrow('left')}
        {renderNavArrow('right')}
      </div>

      <div className='page-content'>
        <div
          className={`page-content__center-container ${
            transition.animate
              ? `page-transition-animation--${transition.direction}`
              : ''
          }`}
          onAnimationEnd={e => {
            if (e.animationName.startsWith('slide')) {
              goToScreen(transition.direction);
              setTransition({ animate: false, direction: null });
            }
          }}
        >
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
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
