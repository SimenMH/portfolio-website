import './styles.css';

import NavArrow from '../../components/NavArrow/NavArrow.component';
import Home from '../Home/Home.screen';
import NavMenu from '../../components/NavMenu/NavMenu.component';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe.screen';

const Main = () => {
  return (
    <Router>
      <div className='page-container'>
        <NavMenu />

        <div className='page-content'>
          <div className='top-container'>
            {/* <NavArrow direction='up' label='Career' path='career' /> */}
          </div>
          <div className='center-container'>
            <NavArrow direction='left' label='About me' path='about' />
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/about' exact>
                <AboutMe />
              </Route>
              <Redirect from='*' to='/' />
            </Switch>
            <NavArrow direction='right' label='Contact' path='contact' />
          </div>
          <div className='bottom-container'>
            <NavArrow direction='down' label='Portfolio' path='portfolio' />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Main;
