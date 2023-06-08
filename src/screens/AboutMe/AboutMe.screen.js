import './styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import skillList from './skills.js';

const AboutMe = () => {
  const [categoryIdx, setCategoryIdx] = useState(0);

  const cycleCategory = dir => {
    setCategoryIdx(curIdx => {
      if (curIdx + dir > skillList.length - 1) {
        return 0;
      } else if (curIdx + dir < 0) {
        return skillList.length - 1;
      }
      return (curIdx += dir);
    });
  };

  return (
    <div className='aboutme-container fade-in'>
      <div className='aboutme-content-container'>
        <section className='aboutme-text-section'>
          <h1>A Little About Me</h1>
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
        <section className='aboutme-skills-section'>
          <h2>
            Highlighted Skills
            <div className='faded-line-seperator' />
          </h2>
          <h3 className='skill-category'>{skillList[categoryIdx].category}</h3>
          <div className='skills-container'>
            <div
              className='skills-cycle-button'
              onClick={() => cycleCategory(-1)}
            >
              <div className='skills-cycle-arrow skills-arrow-left' />
            </div>
            <div className='skills-grid'>
              {skillList[categoryIdx].skills.map(skill => {
                return (
                  <div className='skill' key={skill.name}>
                    <div className='skill-icon'>
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className={`skill-icon-img ${
                          skill.size ? skill.size : ''
                        }`}
                      />
                    </div>
                    <h3 className='skill-name'>{skill.name}</h3>
                    {/* <p>{skill.description}</p> */}
                  </div>
                );
              })}
            </div>
            <div
              className='skills-cycle-button'
              onClick={() => cycleCategory(1)}
            >
              <div className='skills-cycle-arrow skills-arrow-right' />
            </div>
          </div>
          <div className='category-dots-container'>
            {skillList.map((_, idx) => {
              return (
                <div
                  className={`category-dot ${
                    idx === categoryIdx ? 'active-category-dot' : ''
                  }`}
                  onClick={() => setCategoryIdx(idx)}
                  key={idx}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
