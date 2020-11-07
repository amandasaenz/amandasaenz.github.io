import icon from '../images/icon1.SVG';
import artstation from '../images/artstation.svg';
import linkedin from '../images/linkedin.svg';

const data = {
  info: {
    icon: icon,
    name: 'Amanda Saenz',
    email: 'amanda.blakely7@gmail.com',
    location: 'Westminster, CO',
    phone: '(361) 232-9436',
    website1: 'https://amandasaenz.artstation.com',
    website2: 'https://www.linkedin.com/in/amandasnoww/',
    websiteLogo1: artstation,
    websiteLogo2: linkedin,
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
      'C/C#',
      'Autodesk Maya',
      'C#',
      'Java',
      'Pixologic Zbrush',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe InDesign',
    ],
    level: [
      'novice',
      'advanced',
      'advanced',
      'novice',
      'intermediate',
      'intermediate',
      'intermediate',
      'advanced',
    ],
  },

  projects: [
    {
      title: 'Overdrive Madness',
      software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
      description: 'Description: 3D character model / rigged and posed',
      partners: 'Partners: personal project',
      role: 'Role: Organic Modeling in Zbrush, retopo/UV map/Rig in Maya.',
      demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
    },

    {
      title: 'Mintcushions Web App',
      software: ['Adobe Illustrator'],
      description: 'Description: React/Redux single page application',
      partners: 'Partners: Full Stack Web Developer',
      role:
        'Role: Created mintcushions logo, character portfolio designs at bottom of web app, and converted all sports logos to SVG format.',
      demo: 'http://www.mintcushions.com/',
    },

    {
      title: 'Winter Soldier UI',
      software: ['Adobe Illustrator', 'Adobe Photoshop'],
      description: 'Description: Starcraft II’s marine user interface',
      partners: 'Partners: UI programmer',
      role: 'Role: Created all UI art, main skull logo, and space environment.',
      demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
    },
    {
      title: 'Endless',
      software: ['Adobe Illustrator', 'Adobe Photoshop'],
      description: 'Description: 2D online multiplayer game made in Unity',
      partners: 'Partners: 3D UI programmer/UX designer',
      role:
        'Role: Created futuristic UI buttons, panels, etc. and space background.',
      demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
    },
  ],

  experience: [
    {
      work: 'Prime LA',
      duration: '(May 2017 - May 2018)',
      role: 'Freelance Graphic Designer',
      description:
        'Design T-shirt graphics Ensure that graphics are ready for printing on T-shirts Convert low resolution images to high quality graphics Provide quality and consistency for client’s brand.',
    },
    {
      work: 'Kidrobot',
      duration: '(June 2019- Current)',
      role: '3D Artist',
      description:
        'Use Pixologic Zbrush to turn 2D concepts and designs into 3D. Construct and design plush toys. Creating Concepts/Designs.',
    },
  ],
};

export default data;
