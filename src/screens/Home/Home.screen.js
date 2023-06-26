import './styles.css';
import SoMeLinks from '../../components/SoMeLinks/SoMeLinks.component';

import CVPDF from '../../assets/Simen Herland - CV.pdf';

const Home = () => {
  return (
    <div className='home-container fade-in'>
      <div className='home-container__text'>
        <h1>Hi, I'm Simen</h1>
        <h1>Software Engineer</h1>
        <div className='home-container__text__line-seperator' />
        <h2>A Full Stack / Front End web developer from Norway.</h2>
      </div>
      <a
        className='primary-button home-container__resume-button'
        href={CVPDF}
        download
      >
        <p>Download Resume</p>
      </a>
      <div className='home-container__links-container'>
        <SoMeLinks />
      </div>
    </div>
  );
};

export default Home;
