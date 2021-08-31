import './styles.css';

const Home = () => {
  return (
    <div className='container'>
      <div className='home-text'>
        <h1>Hello, I am Simen</h1>
        <h2>Full-Stack Web Developer</h2>
        <div className='line-seperator' />
        <p>
          A {'{coolAdjective}'} developer residing and surviving in the frozen
          wastes of Norway
        </p>
      </div>
      <div className='some-links'>
        <div className='link-icon' />
        <div className='link-icon' />
        <div className='link-icon' />
      </div>
    </div>
  );
};

export default Home;
