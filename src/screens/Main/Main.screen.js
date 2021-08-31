import './styles.css';

import NavArrow from '../../components/NavArrow/NavArrow.component';

const Main = () => {
  return (
    <div className='page-container'>
      <div className='menu-button'>
        <div className='menu-line-container'>
          <div className='menu-line' />
          <div className='menu-line' />
          <div className='menu-line' />
        </div>
      </div>

      <div className='page-content'>
        <div className='top-container'>
          <NavArrow direction='up' label='Career' />
        </div>
        <div className='center-container'>
          <NavArrow direction='left' label='About me' />
          <div className='center-content'>
            {/*  */}
            <div className='about-me'>
              <h1>Hello, I am Simen</h1>
              <h2>Full-Stack Web Developer</h2>
              <div className='line-seperator' />
              <p>
                A {'{coolSoundingAdjective}'} developer residing and surviving
                in the frozen wastes of Norway
              </p>
            </div>
            <div className='some-links'>
              <div className='link-icon' />
              <div className='link-icon' />
              <div className='link-icon' />
            </div>
            {/*  */}
          </div>
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
