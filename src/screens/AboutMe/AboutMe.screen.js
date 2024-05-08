import { Link } from 'react-router-dom';

import SkillCarousel from '../../components/SkillCarousel/SkillCarousel.component';

const AboutMe = () => {
  return (
    <div className='aboutme-container fade-in-animation'>
      <div className='aboutme-container__content'>
        <div className='aboutme-container__text'>
          <h1>About Me</h1>
          <p>
            Hi, I'm Simen. A software developer based on Norway who has had a
            burning passion for tech and development since 2012.
          </p>
          <p>
            I am entirely self-taught and exceptionally self-driven. My
            expertise extends across both front-end and back-end development,
            and I enjoy working on the entire development spectrum. I am
            well-versed in various programming languages and utilities, and in
            addition I have a strong understanding of the fundumental aspects of
            computer science.
          </p>
          <p>
            I take a lot of pride and enjoyment in building fun and ambitious
            projects alongside likeminded people. I consider myself organized,
            effective, highly motivated, and I love solving problems with a
            great attention to detail.
          </p>
          <p>
            Outside of work, I find solace in my other passions such as cooking,
            outdoor activities, and the company of animals.
          </p>
          <p>
            If you are looking for a dedicated full-stack developer, I would be
            thrilled to collaborate with you!
          </p>
          <Link className='aboutme-container__get-in-touch' to='/contact'>
            Get in touch!
            <label className='aboutme-container__get-in-touch-focus' />
          </Link>
        </div>
        <SkillCarousel />
      </div>
    </div>
  );
};

export default AboutMe;
