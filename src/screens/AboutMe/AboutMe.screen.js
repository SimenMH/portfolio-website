import { Link } from 'react-router-dom';

import SkillCarousel from '../../components/SkillCarousel/SkillCarousel.component';

const AboutMe = () => {
  return (
    <div className='aboutme-container fade-in-animation'>
      <div className='aboutme-container__content'>
        <div className='aboutme-container__text'>
          <h1>About Me</h1>
          <p>
            Hi, I'm Simen. A full-stack developer based in Norway who has had a
            serious passion for programming since 2012.
          </p>
          <p>
            I take immense pride and enjoyment in building exceptional projects
            alongside exceptional people. I consider myself organized, positive,
            and highly motivated. I thrive on solving problems with an
            undoubtedly great attention to detail.
          </p>
          <p>
            When I'm not immersed in work, I find solace in exploring my other
            passions, such as cooking, engaging in outdoor activities, and
            embracing the company of animals. These passions not only bring
            balance to my life but also inspire creativity in my work.
          </p>
          <p>
            My expertise extends across both front-end and back-end development,
            and I enjoy working on the entire development spectrum. I am
            well-versed in various programming languages and utilities, which
            makes me well prepared to take on ambitious projects alongside
            like-minded individuals who share the same strong drive.
          </p>
          <p>
            If you share a passion for innovative endeavors and are looking for
            a dedicated full-stack developer, I would be thrilled to collaborate
            with you!
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
