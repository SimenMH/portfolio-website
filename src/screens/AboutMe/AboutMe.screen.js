import './styles.css';
import { useState } from 'react';

import JavaScriptLogo from '../../assets/skill-logos/JavaScript-logo.svg';
import HTML5Logo from '../../assets/skill-logos/HTML5-logo.svg';
import CSS3Logo from '../../assets/skill-logos/CSS3-logo.svg';
import ReactLogo from '../../assets/skill-logos/React-logo.svg';
import AngularLogo from '../../assets/skill-logos/Angular-logo.svg';
import SASSLogo from '../../assets/skill-logos/SASS-logo.svg';

const skillList = [
  {
    category: 'Frontend',
    skills: [
      {
        name: 'JavaScript',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: JavaScriptLogo,
      },
      {
        name: 'HTML5',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: HTML5Logo,
      },
      {
        name: 'CSS3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: CSS3Logo,
      },
      {
        name: 'React',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: ReactLogo,
      },
      {
        name: 'Angular',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: AngularLogo,
      },
      {
        name: 'SASS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: SASSLogo,
      },
    ],
  },
  {
    category: 'Backend',
    skills: [
      {
        name: 'NodeJS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'Express',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'SQL',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'GraphQL',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'MongoDB',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'REST APIs',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
    ],
  },
  {
    category: 'Other',
    skills: [
      {
        name: 'Python',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'C#',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'Git',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'Docker',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'Agile',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'Game Development',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
    ],
  },
];

const AboutMe = () => {
  const [skillsIdx, setSkillsIdx] = useState(0);

  const cycleSkills = dir => {
    setSkillsIdx(curIdx => {
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
        <h3>{skillList[skillsIdx].category}</h3>
        <div className='skills-container'>
          <div
            className='skills-arrow skills-arrow-left'
            onClick={() => cycleSkills(-1)}
          />
          <div className='skills-grid'>
            {skillList[skillsIdx].skills.map(skill => {
              return (
                <div className='skill'>
                  <div className='skill-icon'>
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              );
            })}
          </div>
          <div
            className='skills-arrow skills-arrow-right'
            onClick={() => cycleSkills(1)}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
