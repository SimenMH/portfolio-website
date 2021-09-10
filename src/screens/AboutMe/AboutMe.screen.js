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
            Full-stack developer living in Norway. Been a programmer since 2012,
            and have a serious passion for building unique projects and creating
            smooth and intuitive user experiences.
          </p>
          <p>
            Well-organized, positive, and highly motivated problem-solver with
            great attention to detail. Other passions include cooking, video
            games, outdoor activities and surrounding myself with animals.
          </p>
          <p>
            Knowledgeable of both the back and frontend development spectrum.
            Familiar with a wide range of programming utilities and languages,
            and love working on ambitious projects with creative and motivated
            people.
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
