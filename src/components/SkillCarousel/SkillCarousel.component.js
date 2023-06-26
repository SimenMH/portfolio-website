import './styles.css';
import { useState } from 'react';

import skillList from './skills.js';

const SkillCarousel = () => {
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
    <div className='skill-carousel-container'>
      <h2>
        Highlighted Skills
        <div className='faded-line-seperator' />
      </h2>
      <h3 className='skill-carousel-container__category'>
        {skillList[categoryIdx].category}
      </h3>
      <div className='skills-container'>
        <div
          className='skill-carousel-container__cycle-button'
          onClick={() => cycleCategory(-1)}
        >
          <div className='skill-carousel-container__cycle-arrow skill-carousel-container__cycle-arrow--left' />
        </div>

        <div className='skills-container__grid'>
          {skillList[categoryIdx].skills.map(skill => {
            return (
              <div className='skills-container__skill' key={skill.name}>
                <div className='skills-container__skill-icon'>
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className={`skills-container__skill-icon-img`}
                  />
                </div>
                <h3 className='skills-container__skill-name'>{skill.name}</h3>
                {/* <p>{skill.description}</p> */}
              </div>
            );
          })}
        </div>

        <div
          className='skill-carousel-container__cycle-button'
          onClick={() => cycleCategory(1)}
        >
          <div className='skill-carousel-container__cycle-arrow skill-carousel-container__cycle-arrow--right' />
        </div>
      </div>

      <div className='skill-carousel-container__nav-dots-container'>
        {skillList.map((_, idx) => {
          return (
            <div
              className={`skill-carousel-container__nav-dot ${
                idx === categoryIdx
                  ? 'skill-carousel-container__nav-dots--active'
                  : ''
              }`}
              onClick={() => setCategoryIdx(idx)}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillCarousel;
