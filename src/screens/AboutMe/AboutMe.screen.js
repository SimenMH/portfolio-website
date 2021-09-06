import './styles.css';

const AboutMe = () => {
  return (
    <div className='aboutme-container fade-in'>
      <h1>A Little About Me</h1>
      <div className='about-text'>
        <p>
          Full-stack developer located in Norway. I have been programming since
          2012, and have a serious passion for building unique projects and
          creating intuitive and dynamic user experiences.
        </p>
        <p>
          Well-organized, positive, and highly motivated problem-solver with
          great attention to detail. Other passions include cooking, video
          games, outdoor activities and surrounding myself with animals.
        </p>
        <p>
          Knowledgeable of both the back and frontend development spectrum.
          Familiar with a wide range of programming utilities and languages, and
          love working on ambitious and impactful projects with positive and
          motivated people.
        </p>
      </div>

      <h1>What I Work With</h1>
      <div className='skills-container'>
        <div className='skill'>
          <div className='skill-icon' />
          <h3>JavaScript</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            enim varius, ullamcorper eros sed, condimentum eros.
          </p>
        </div>
        <div className='skill'>
          <div className='skill-icon' />
          <h3>HTML5</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            enim varius, ullamcorper eros sed, condimentum eros.
          </p>
        </div>
        <div className='skill'>
          <div className='skill-icon' />
          <h3>CSS3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            enim varius, ullamcorper eros sed, condimentum eros.
          </p>
        </div>
        <div className='skill'>
          <div className='skill-icon' />
          <h3>React</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            enim varius, ullamcorper eros sed, condimentum eros.
          </p>
        </div>
        <div className='skill'>
          <div className='skill-icon' />
          <h3>Angular</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            enim varius, ullamcorper eros sed, condimentum eros.
          </p>
        </div>
        <div className='skill'>
          <div className='skill-icon' />
          <h3>SASS</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            enim varius, ullamcorper eros sed, condimentum eros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
