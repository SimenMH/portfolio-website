import './styles.css';

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
          <div className='nav-button nav-up'>
            <div className='nav-arrow' />
          </div>
        </div>
        <div className='center-container'>
          <div className='nav-button nav-left'>
            <div className='nav-arrow' />
          </div>
          <div className='center-content'>
            {/*  */}
            <div className='about-me'>
              <h1>Hello, I am Simen</h1>
              <h2>Full-Stack Web Developer</h2>
              <div className='line-seperator' />
              <p>
                A passionate and positive developer residing and surviving in
                the frozen wastes of Norway
              </p>
            </div>
            <div className='some-links'>
              <div className='link-icon' />
              <div className='link-icon' />
              <div className='link-icon' />
            </div>
            {/*  */}
          </div>
          <div className='nav-button nav-right'>
            <div className='nav-arrow' />
          </div>
        </div>
        <div className='bottom-container'>
          <div className='nav-button nav-down'>
            <div className='nav-arrow' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
