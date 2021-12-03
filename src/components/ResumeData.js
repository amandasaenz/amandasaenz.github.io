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
        'Worked closely with designer to produce a series of 3D vinyl figures for Disney. Utilized Zbrush to sculpt Goliath, Demona, and Bronx.',
      demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
    },
    {
      title: 'amandasaenz.github.io',
      software: ['React/Javascript', 'CSS', 'Illustrator'],
      description:
        'Single page application created in React. Implemented stylization through CSS and Illustrator',
      demo: 'https://amandasaenz.github.io/',
    },
    {
      title: 'Josh Divine X Super Crash Bro',
      software: ['Pixologic Zbrush', 'Keyshot'],
      description:
        'Super Crash Bro is the 2nd “Crash” series toy by Josh Divine. Created a 3D vinyl figure based off concept. Produced by Strangecat Toys',
      demo: 'https://www.strangecattoys.com/products/super-crash-bro-by-josh-divine',
    },
    {
      title: 'Overdrive Madness',
      software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
      description: `3D fan art of Insomniac's game Sunset Overdrive. Utilized Autodesk Maya for Animation and Rigging. Rendered model in Pixologic's Renderman.`,
      demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
    },
    {
      title: 'Endless',
      software: ['Adobe Illustrator', 'Adobe Photoshop'],
      description: `2D online multiplayer game developed in Unity. Worked closely with programmer to create a user interface design. Designed all UI art assets utilizing Adobe Creative Suite.`,
      demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
    },
  ],

  experience: [
    {
      work: 'Kidrobot',
      duration: '(June 2019- Current)',
      role: 'Senior 3D Artist',
      description: `Team up with licensors and designers to produce 3D vinyl figures within Zbrush and Autodesk Maya. Design plush toys for licensors and Kidrobot's Yummy World line. Render 3D vinyl figures within Keyshot. Collaborate with licensors such as Disney, Sanrio, Nickelodeon, and more.`,
    },
  ],
};

export default data;
