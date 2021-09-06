import './styles.css';
import { useState } from 'react';

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
      <section className='aboutme-text-section'>
        <h1>A Little About Me</h1>

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
      </section>
      <br />
      <section className='aboutme-skills-section'>
        <h1>Highlighted Skills</h1>
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
                <div className='skill'>
                  <div className='skill-icon'>
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <h3 className='skill-name'>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              );
            })}
          </div>
          <div className='skills-cycle-button' onClick={() => cycleCategory(1)}>
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
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
