import overdrive from './ProjectImages/3DProjects/overdrive.jpg';
import kaiju from './ProjectImages/3DProjects/kaiju.jpg';
import croatian from './ProjectImages/3DProjects/croatian.jpg';
import deercat from './ProjectImages/3DProjects/DeerCat.jpg';
import wonderwoman from './ProjectImages/3DProjects/wonderwoman.jpg';
import andybust from './ProjectImages/3DProjects/AndyWarhol.jpg';
import bowlhead from './ProjectImages/3DProjects/bowlheadbanks.jpg';
import mario from './ProjectImages/3DProjects/CrashMario.jpg';
import mint from './ProjectImages/UXUIProjects/mint.png';
import wintersoldier from './ProjectImages/UXUIProjects/wintersoldier.jpg';
import endless from './ProjectImages/UXUIProjects/endless.jpg';
import website from './ProjectImages/UXUIProjects/website.png';
import openminded from './ProjectImages/IllustrationProjects/openminded.jpg';
import hamster from './ProjectImages/IllustrationProjects/hamster.jpg';
import travis from './ProjectImages/IllustrationProjects/travis.jpg';
import mischief from './ProjectImages/IllustrationProjects/mischief.jpg';
import it from './ProjectImages/IllustrationProjects/it.jpg';
import wolf from './ProjectImages/IllustrationProjects/whitewolf.jpg';
import milk from './ProjectImages/PlushProjects/milk.png';
import icecream from './ProjectImages/PlushProjects/icecream.png';
import guac from './ProjectImages/PlushProjects/guac.png';

const data = {
  projects: {
    //-------------------------------- 3 D  P R O J E C T S --------------------------------

    threeD: [
      {
        title: 'Overdrive Madness',
        id: 'OverdriveMadness',
        thumbnail: overdrive,
        images: [overdrive, website, overdrive],
        software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
        description: 'Description: 3D character model / rigged and posed',
        partners: 'Partners: personal project',
        role: 'Role: Organic Modeling in Zbrush, retopo/UV map/Rig in Maya.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Kidrobot Hello Kitty Kaiju',
        id: 'HelloKittyKaiju',
        thumbnail: kaiju,
        images: [kaiju, kaiju, kaiju],
        software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
        description: 'Description: 3D character model / rigged and posed',
        partners: 'Partners: personal project',
        role: 'Role: Organic Modeling in Zbrush, retopo/UV map/Rig in Maya.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Kidrobot Croatian Vacation',
        id: 'CroatianVacation',
        thumbnail: croatian,
        images: [croatian, croatian, croatian, croatian, croatian],
        software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
        description: 'Description: 3D character model / rigged and posed',
        partners: 'Partners: personal project',
        role: 'Role: Organic Modeling in Zbrush, retopo/UV map/Rig in Maya.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Kidrobot WonderWoman',
        id: 'WonderWoman',
        thumbnail: wonderwoman,
        images: [wonderwoman, wonderwoman],
        software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
        description: 'Description: 3D character model / rigged and posed',
        partners: 'Partners: personal project',
        role: 'Role: Organic Modeling in Zbrush, retopo/UV map/Rig in Maya.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Strangecat DeerCat',
        id: 'DeerCat',
        thumbnail: deercat,
        images: [deercat, deercat, deercat],
        software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
        description: 'Description: 3D character model / rigged and posed',
        partners: 'Partners: personal project',
        role: 'Role: Organic Modeling in Zbrush, retopo/UV map/Rig in Maya.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Kidrobot Andy Warhol Bust',
        id: 'AndyWarhol',
        thumbnail: andybust,
        images: [andybust],
        software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
        description: 'Description: 3D character model / rigged and posed',
        partners: 'Partners: personal project',
        role: 'Role: Organic Modeling in Zbrush, retopo/UV map/Rig in Maya.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Bowlhead Banks',
        id: 'BowlheadBanks',
        thumbnail: bowlhead,
        images: [bowlhead, bowlhead],
        software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
        description: 'Description: 3D character model / rigged and posed',
        partners: 'Partners: personal project',
        role: 'Role: Organic Modeling in Zbrush, retopo/UV map/Rig in Maya.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Josh Divine Crash Mario',
        id: 'mario',
        thumbnail: mario,
        images: [mario, mario],
        software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
        description: 'Description: 3D character model / rigged and posed',
        partners: 'Partners: personal project',
        role: 'Role: Organic Modeling in Zbrush, retopo/UV map/Rig in Maya.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },
    ],

    //-------------------------------- U X  P R O J E C T S --------------------------------

    UX: [
      {
        title: 'Mintcushions Web App',
        id: 'Mintcushions',
        thumbnail: mint,
        images: [mint, mint, mint],
        software: ['Adobe Illustrator'],
        description: 'Description: React/Redux single page application',
        partners: 'Partners: Full Stack Web Developer',
        role:
          'Role: Created mintcushions logo, character portfolio designs at bottom of web app, and converted all sports logos to SVG format.',
        demo: 'http://www.mintcushions.com/',
      },
      {
        title: 'Winter Soldier UI',
        id: 'WinterSoldier',
        thumbnail: wintersoldier,
        images: [wintersoldier],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: Starcraft II’s marine user interface',
        partners: 'Partners: UI programmer',
        role:
          'Role: Created all UI art, main skull logo, and space environment.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'Endless',
        id: 'Endless',
        thumbnail: endless,
        images: [endless, endless, endless, endless, endless],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: 2D online multiplayer game made in Unity',
        partners: 'Partners: 3D UI programmer/UX designer',
        role:
          'Role: Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'Website',
        id: 'Website',
        thumbnail: website,
        images: [website, website, website, website, website],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: 2D online multiplayer game made in Unity',
        partners: 'Partners: 3D UI programmer/UX designer',
        role:
          'Role: Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
    ],

    //-------------------------------- I L L U S T R A T I O N  P R O J E C T S --------------------------------

    IllustP: [
      {
        title: 'Openminded',
        id: 'OpenMinded',
        thumbnail: openminded,
        images: [openminded, openminded],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: 2D online multiplayer game made in Unity',
        partners: 'Partners: 3D UI programmer/UX designer',
        role:
          'Role: Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'Hamster',
        id: 'Hamster',
        thumbnail: hamster,
        images: [hamster],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: 2D online multiplayer game made in Unity',
        partners: 'Partners: 3D UI programmer/UX designer',
        role:
          'Role: Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'Travis Portrait',
        id: 'TravisBarker',
        thumbnail: travis,
        images: [travis],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: 2D online multiplayer game made in Unity',
        partners: 'Partners: 3D UI programmer/UX designer',
        role:
          'Role: Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },

      {
        title: 'White Wolf',
        id: 'WhiteWolf',
        thumbnail: wolf,
        images: [wolf, wolf],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: 2D online multiplayer game made in Unity',
        partners: 'Partners: 3D UI programmer/UX designer',
        role:
          'Role: Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'IT sketch',
        id: 'IT',
        thumbnail: it,
        images: [it],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: 2D online multiplayer game made in Unity',
        partners: 'Partners: 3D UI programmer/UX designer',
        role:
          'Role: Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },

      {
        title: 'Mischief',
        id: 'Mischief',
        thumbnail: mischief,
        images: [mischief],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: 2D online multiplayer game made in Unity',
        partners: 'Partners: 3D UI programmer/UX designer',
        role:
          'Role: Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
    ],

    //-------------------------------- P L U S H  P R O J E C T S --------------------------------

    PlushP: [
      {
        title: 'Milk and Cookies',
        id: 'MilkAndCookies',
        thumbnail: milk,
        images: [milk, milk, milk],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: 2D online multiplayer game made in Unity',
        partners: 'Partners: 3D UI programmer/UX designer',
        role:
          'Role: Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'Chips and Guac',
        id: 'ChipsAndGuac',
        thumbnail: guac,
        images: [guac, guac],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: 2D online multiplayer game made in Unity',
        partners: 'Partners: 3D UI programmer/UX designer',
        role:
          'Role: Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'Icecream Upsidedown',
        id: 'Icecream',
        thumbnail: icecream,
        images: [icecream, icecream],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: 2D online multiplayer game made in Unity',
        partners: 'Partners: 3D UI programmer/UX designer',
        role:
          'Role: Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
    ],

    //-------------------------------- R E A C T  P R O J E C T S --------------------------------

    ReactP: [
      {
        title: 'Website',
        id: 'Website',
        thumbnail: website,
        images: [website, website],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: 'Description: 2D online multiplayer game made in Unity',
        partners: 'Partners: 3D UI programmer/UX designer',
        role:
          'Role: Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
    ],
  },
};

export default data;
