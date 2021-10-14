const data = {
  info: {
    name: 'Amanda Saenz',
    email: 'amanda.blakely7@gmail.com',
    location: 'Westminster, CO',
    phone: '(361) 232-9436',
    linkedin: 'https://www.linkedin.com/in/amandasnoww/',
    github: 'https://github.com/amandasaenz',
  },

  navbarLinks: {
    projects: 'Projects',
    resume: 'Resume',
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
      title: 'Gargoyles - Disney X Kidrobot',
      software: ['Pixologic Zbrush', 'Keyshot'],
      description:
        'I had the wonderful pleasure of working with Disney on the Gargoyle toy series. I worked with a talented concept artist and sculpted Goliath, Demona, and Bronx.',
      demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
    },
    {
      title: 'amandasaenz.github.io',
      software: ['React/Javascript', 'CSS', 'Illustrator'],
      description: 'My website is a single page application created in React.',
      demo: 'https://amandasaenz.github.io/',
    },
    {
      title: 'Josh Divine X Super Crash Bro',
      software: ['Pixologic Zbrush', 'Keyshot'],
      description:
        'Super Crash Bro is the 2nd “Crash” series toy by Josh Divine. My role was to turn his 2D design into 3D.',
      demo:
        'https://www.strangecattoys.com/products/super-crash-bro-by-josh-divine',
    },
    {
      title: 'Overdrive Madness',
      software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
      description:
        'I created myself in the world of one of my favorite Insomniac games, Sunset Overdrive. I created the concept and 3D sculpt.',
      demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
    },
    {
      title: 'Endless',
      software: ['Adobe Illustrator', 'Adobe Photoshop'],
      description:
        'This project is a 2D online multiplayer game made in Unity. I worked closely with a UI programmer. My role was to design the UI art assets.',
      demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
    },
  ],

  experience: [
    {
      work: 'Kidrobot',
      duration: '(June 2019- Current)',
      role: '3D Artist',
      description:
        'Here at Kidrobot, I use Pixologic Zbrush to turn 2D concepts into 3D. I also work on designs for plush toys as well as vinyl and create concepts for different licensors.',
    },
    {
      work: 'Prime LA',
      duration: '(May 2017 - May 2018)',
      role: 'Freelance Graphic Designer',
      description:
        'At Prime LA, I created T-shirt graphics and ensured that graphics were ready for printing.',
    },
  ],
};

export default data;
