import icon from '../images/icon1.SVG';
import nicon from '../images/icon22.SVG';
import artstation from '../images/artstation.svg';
import linkedin from '../images/linkedin.svg';
import linkedin2 from '../images/linkedin2.svg';
import github from '../images/github.svg';
import github2 from '../images/github2.svg';

const data = {
  info: {
    icon: icon,
    navicon: nicon,
    name: 'Amanda Saenz',
    email: 'amanda.blakely7@gmail.com',
    location: 'Westminster, CO',
    phone: '(361) 232-9436',
    website1: 'https://amandasaenz.artstation.com',
    website2: 'https://www.linkedin.com/in/amandasnoww/',
    website3: 'https://github.com/amandasaenz',
    websiteLogo1: artstation,
    websiteLogo2: linkedin,
    websiteLogo3: linkedin2,
    websiteLogo4: github,
    websiteLogo5: github2,
  },

  navbarLinks: {
    link1: 'Projects',
    link2: 'Resume',
  },

  education: {
    major: 'Bachelor of Science in Computer Science',
    school: 'Texas A&M University - Corpus Christi',
    graduated: 'Graduated: Fall 2017',
  },

  //novice = yellow, intermediate = purple, advanced = pink
  technical: {
    skillList: [
      'Javascript',
      'Autodesk Maya',
      'CSS',
      'Pixologic Zbrush',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe InDesign',
    ],
    level: [
      'novice',
      'advanced',
      'intermediate',
      'advanced',
      'intermediate',
      'advanced',
      'novice',
    ],
  },

  projects: [
    {
      title: 'Overdrive Madness',
      software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
      description:
        'I created myself in the world of Sunset Overdrive (game created by Insomniac Games), where I jump to collect a Fizzie.',
      partners: 'This was a personal project.',
      role: 'Design a 3D model that is rigged and posed.',
      demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
    },

    {
      title: 'Mintcushions Web App',
      software: ['Adobe Illustrator'],
      description: 'React/Redux single page application',
      partners: 'Full Stack Web Developer',
      role:
        'Created mintcushions logo, character portfolio designs at bottom of web app, and converted all sports logos to SVG format.',
      demo: 'http://www.mintcushions.com/',
    },

    {
      title: 'Winter Soldier UI',
      software: ['Adobe Illustrator', 'Adobe Photoshop'],
      description:
        'Inspired by Starcraft, Winter Soldier user interface shows a unique approach to a game HUD',
      partners: 'UI programmer',
      role:
        'Design all UI art, main skull logo, weapons,and space environment.',
      demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
    },
    {
      title: 'Endless',
      software: ['Adobe Illustrator', 'Adobe Photoshop'],
      description: '2D online multiplayer game made in Unity',
      partners: '3D UI programmer/UX designer',
      role: 'Design futuristic UI buttons, panels, and space background.',
      demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
    },
  ],

  experience: [
    {
      work: 'Kidrobot',
      duration: '(June 2019- Current)',
      role: '3D Artist',
      description:
        'Use Pixologic Zbrush to turn 2D concepts and designs into 3D. Creating Concepts/Designs of plush toys.',
    },
    {
      work: 'Prime LA',
      duration: '(May 2017 - May 2018)',
      role: 'Freelance Graphic Designer',
      description:
        'Design T-shirt graphics Ensure that graphics are ready for printing on T-shirts Convert low resolution images to high quality graphics Provide quality and consistency for client’s brand.',
    },
  ],
};

export default data;
