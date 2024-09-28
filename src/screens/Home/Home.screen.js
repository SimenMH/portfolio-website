import SoMeLinks from '../../components/SoMeLinks/SoMeLinks.component';

import CVPDF from '../../assets/Simen Herland - CV.pdf';

const Home = () => {
  return (
    <div className='home-container fade-in-animation'>
      <a
        className='primary-button home-container__boggdle-button'
        href='https://www.simenmh.com/boggdle'
        target='_blank'
        rel='noreferrer'
      >
        <p>Play Boggdle!</p>
      </a>

      <div className='home-container__text'>
        <h1>Hi, I'm Simen</h1>
        <h1>Software Engineer</h1>
        <div className='home-container__text__line-seperator' />
        <h2>A Full Stack / Front End engineer from Norway.</h2>
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
