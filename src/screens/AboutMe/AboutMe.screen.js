import './styles.css';

const skillList = [
  {
    category: 'Frontend',
    skills: [
      {
        name: 'JavaScript',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'HTML3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'CSS3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'React',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'Angular',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
      },
      {
        name: 'SASS',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim varius, ullamcorper eros sed, condimentum eros.',
        logo: 'path',
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
      <div className='skills-container'>
        <h1>Highlighted Skills</h1>
        <div className='skills-grid'>
          {skillList[2].skills.map(skill => {
            return (
              <div className='skill'>
                <div className='skill-icon' />
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
