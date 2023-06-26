import './styles.css';
import { Link } from 'react-router-dom';

import SkillCarousel from '../../components/SkillCarousel/SkillCarousel.component';

const AboutMe = () => {
  return (
    <div className='aboutme-container fade-in'>
      <div className='aboutme-content-container'>
        <section className='aboutme-text-section'>
          <h1>About Me</h1>
          <p>
            As a full-stack developer based in Norway, I have been passionately
            immersed in the world of programming since 2012. I take immense
            pride in crafting exceptional projects and designing intuitive user
            experiences.
          </p>
          <p>
            Organized, positive, and highly motivated, I thrive on solving
            problems with meticulous attention to detail. I find immense
            satisfaction in creating seamless solutions that exceed
            expectations.
          </p>
          <p>
            When I'm not immersed in coding, I find solace in exploring my other
            passions, such as cooking, engaging in outdoor activities, and
            embracing the company of animals. These passions not only bring
            balance to my life but also inspire creativity in my work.
          </p>
          <p>
            My expertise extends across both front-end and back-end development,
            allowing me to navigate the entire development spectrum. I am
            well-versed in various programming languages and utilities, allowing
            me to take on ambitious projects alongside like-minded individuals
            who share the same strong drive.
          </p>
          <p>
            If you share a passion for innovative endeavors and are seeking a
            dedicated full-stack developer, I would be thrilled to collaborate
            with you.
          </p>
          <Link className='get-in-touch' to='/contact'>
            Get in touch!
            <label className='input-focus' />
          </Link>
        </section>
        <SkillCarousel />
      </div>
    </div>
  );
};

export default AboutMe;
