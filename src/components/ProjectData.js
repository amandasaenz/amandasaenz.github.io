import overdrive from './ProjectImages/3DProjects/overdrive.jpg';

import greenKaiju from './ProjectImages/3DProjects/HKKaiju_green.jpg';
import midnightKaiju from './ProjectImages/3DProjects/HKKaiju_midnight.jpg';
import unicornKaiju from './ProjectImages/3DProjects/HKKaiju_unicorn.jpg';
import pinkKaiju from './ProjectImages/3DProjects/HKKaiju_pink.jpg';
import rainbowKaiju from './ProjectImages/3DProjects/HKKaiju_rainbow.jpg';

import croatian1 from './ProjectImages/3DProjects/CroatianVacation1.jpg';
import croatian2 from './ProjectImages/3DProjects/CroatianVacation2.jpg';
import croatian3 from './ProjectImages/3DProjects/CroatianVacation3.jpg';

import deercat from './ProjectImages/3DProjects/DeerCat.jpg';

import wonderwoman from './ProjectImages/3DProjects/wonderwoman.jpg';
import wonderwomanThumb from './ProjectImages/3DProjects/wonderwoman_thumb.jpg';

import greenWarhol from './ProjectImages/3DProjects/WarholBust_greencamo.jpg';
import yellowWarhol from './ProjectImages/3DProjects/WarholBust_yellowcamo.jpg';

import bowlhead from './ProjectImages/3DProjects/bowlheadbanks.jpg';

import superCrashBro from './ProjectImages/3DProjects/superCrashBro.jpg';
import superCrashBro2 from './ProjectImages/3DProjects/superCrashBro2.jpg';

import mint from './ProjectImages/UXUIProjects/mint.gif';
import mintThumb from './ProjectImages/UXUIProjects/mint_thumb.gif';

import minterik from './ProjectImages/UXUIProjects/minterik.gif';
import mintamanda from './ProjectImages/UXUIProjects/mintamanda.gif';

import wintersoldier from './ProjectImages/UXUIProjects/wintersoldier.jpg';
import WS from './ProjectImages/UXUIProjects/WinterSoldier.gif';
import WS_thumb from './ProjectImages/UXUIProjects/WinterSoldier_thumb.gif';

import endless from './ProjectImages/UXUIProjects/Endless.jpg';
import endless2 from './ProjectImages/UXUIProjects/Endless2.jpg';
import endless3 from './ProjectImages/UXUIProjects/Endless3.jpg';
import endless4 from './ProjectImages/UXUIProjects/Endless4.jpg';
import endless5 from './ProjectImages/UXUIProjects/Endless5.jpg';
import endless6 from './ProjectImages/UXUIProjects/Endless6.jpg';
import endless7 from './ProjectImages/UXUIProjects/Endless7.jpg';
import endless8 from './ProjectImages/UXUIProjects/Endless8.jpg';
import endless9 from './ProjectImages/UXUIProjects/Endless9.jpg';
import endless10 from './ProjectImages/UXUIProjects/Endless10.jpg';
import endless11 from './ProjectImages/UXUIProjects/Endless11.jpg';

import website from './ProjectImages/UXUIProjects/website.png';
import openminded from './ProjectImages/IllustrationProjects/openminded.jpg';
import hamster from './ProjectImages/IllustrationProjects/hamster.jpg';
import travis from './ProjectImages/IllustrationProjects/travis.jpg';
import mischief from './ProjectImages/IllustrationProjects/mischief.jpg';
import it from './ProjectImages/IllustrationProjects/it.jpg';
import wolf from './ProjectImages/IllustrationProjects/whitewolf.jpg';

import YW_milk from './ProjectImages/PlushProjects/YW_MC_1.jpg';
import YW_milk2 from './ProjectImages/PlushProjects/YW_MC_2.jpg';
import YW_milk3 from './ProjectImages/PlushProjects/YW_MC_3.jpg';
import YW_milk4 from './ProjectImages/PlushProjects/YW_MC_4.jpg';
import YW_milk5 from './ProjectImages/PlushProjects/YW_MC_5.jpg';
import YW_milk6 from './ProjectImages/PlushProjects/YW_MC_6.jpg';
import YW_milk7 from './ProjectImages/PlushProjects/YW_MC_7.jpg';
import YW_milk8 from './ProjectImages/PlushProjects/YW_MC_8.jpg';
import YW_milk9 from './ProjectImages/PlushProjects/YW_MC_9.jpg';
import YW_milk10 from './ProjectImages/PlushProjects/YW_MC_10.jpg';

import YW_cone from './ProjectImages/PlushProjects/YW_WC_1.jpg';
import YW_cone2 from './ProjectImages/PlushProjects/YW_WC_2.jpg';
import YW_cone3 from './ProjectImages/PlushProjects/YW_WC_3.jpg';
import YW_cone4 from './ProjectImages/PlushProjects/YW_WC_4.jpg';

import YW_chips from './ProjectImages/PlushProjects/YW_CS_1.jpg';
import YW_chips2 from './ProjectImages/PlushProjects/YW_CS_2.jpg';
import YW_chips3 from './ProjectImages/PlushProjects/YW_CS_3.jpg';
import YW_chips4 from './ProjectImages/PlushProjects/YW_CS_4.jpg';
import YW_chips5 from './ProjectImages/PlushProjects/YW_CS_5.jpg';
import YW_chips6 from './ProjectImages/PlushProjects/YW_CS_6.jpg';

const data = {
  projects: {
    //-------------------------------- 3 D  P R O J E C T S --------------------------------

    threeD: [
      {
        title: 'Overdrive Madness',
        id: 'OverdriveMadness',
        thumbnail: overdrive,
        images: [overdrive],
        software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan'],
        description:
          'I created myself in the world of Sunset Overdrive (game created by Insomniac Games), where I jump to collect a Fizzie.',
        partners: 'This was a personal project.',
        role: 'Design a 3D model that is rigged and posed.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Kidrobot X Hello Kitty Kaiju',
        id: 'HelloKittyKaiju',
        thumbnail: greenKaiju,
        images: [
          greenKaiju,
          midnightKaiju,
          unicornKaiju,
          pinkKaiju,
          rainbowKaiju,
        ],
        software: ['Pixologic Zbrush', 'Keyshot'],
        description: 'Hello Kitty Kaiju destroys the city.',
        partners: 'Designer',
        role:
          'Turn a provided toy design into a 3D sculpt. Digitally paint the 3D toy and render it in Keyshot.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Kidrobot X Croatian Vacation',
        id: 'CroatianVacation',
        thumbnail: croatian3,
        images: [croatian2, croatian3, croatian1],
        software: ['Pixologic Zbrush', 'Keyshot'],
        description: 'Labbit is on a Croatian Vacation.',
        partners: 'Designer',
        role:
          'Turn a provided toy design into a 3D sculpt. Digitally paint the 3D toy and render it in Keyshot.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Kidrobot X WonderWoman',
        id: 'WonderWoman',
        thumbnail: wonderwomanThumb,
        images: [wonderwoman],
        software: ['Pixologic Zbrush', 'Keyshot'],
        description: 'This was a 3D test given to me by Kidrobot.',
        partners: 'This was a test, no partners.',
        role: 'Turn a 2D concept into a 3D sculpt.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Strangecat Toys X DeerCat',
        id: 'DeerCat',
        thumbnail: deercat,
        images: [deercat],
        software: ['Pixologic Zbrush', 'Keyshot'],
        description: 'Deercat and Snoo, an illustration by Amber Aki Huang.',
        partners: 'Illustrator',
        role: 'Turn a 2D concept into a 3D sculpt.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Kidrobot X Andy Warhol',
        id: 'AndyWarhol',
        thumbnail: yellowWarhol,
        images: [greenWarhol, yellowWarhol],
        software: ['Pixologic Zbrush', 'Keyshot'],
        description: 'Andy Warhol bust in different "Hydro Dip" camo colors.',
        partners: 'Concept Artist',
        role: 'Turn a 2D concept into a 3D sculpt.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Bowlhead Banks',
        id: 'BowlheadBanks',
        thumbnail: bowlhead,
        images: [bowlhead],
        software: ['Autodesk Maya', 'Pixologic Zbrush', 'RenderMan', 'XGen'],
        description:
          'I created Bowlhead Banks to study XGen, a hair simulator.',
        partners: 'personal project',
        role: 'Design a character head and simulate his hair.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },

      {
        title: 'Josh Divine X Super Crash Bro',
        id: 'mario',
        thumbnail: superCrashBro,
        images: [superCrashBro, superCrashBro2],
        software: ['Pixologic Zbrush', 'Keyshot'],
        description:
          'Super Crash Bro is the 2nd "crash" series toy by Josh Divine.',
        partners: 'Josh Divine',
        role: 'Turn a 2D concept into a 3D sculpt.',
        demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
      },
    ],

    //-------------------------------- U X  P R O J E C T S --------------------------------

    UX: [
      {
        title: 'Mintcushions Web App',
        id: 'Mintcushions',
        thumbnail: mintThumb,
        images: [mint, minterik, mintamanda],
        software: ['Adobe Illustrator'],
        description: 'React/Redux single page application',
        partners: 'Full Stack Web Developer',
        role:
          'Created mintcushions logo, character portfolio designs at bottom of web app, and converted all sports logos to SVG format.',
        demo: 'http://www.mintcushions.com/',
      },
      {
        title: 'Winter Soldier UI',
        id: 'WinterSoldier',
        thumbnail: WS_thumb,
        images: [WS, wintersoldier],
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
        id: 'Endless',
        thumbnail: endless,
        images: [
          endless,
          endless2,
          endless3,
          endless4,
          endless5,
          endless6,
          endless7,
          endless8,
          endless9,
          endless10,
          endless11,
        ],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: '2D online multiplayer game made in Unity',
        partners: '3D UI programmer/UX designer',
        role: 'Design futuristic UI buttons, panels, and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'amandasaenz.github.io - My Portfolio',
        id: 'Website',
        thumbnail: website,
        images: [website],
        software: ['React/Javascript', 'CSS', 'Illustrator'],
        description:
          'I created a website to show my all of my projects and resume.',
        partners: 'personal project',
        role: 'Create all UI assets and programmed whole website.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
    ],

    //-------------------------------- R E A C T  P R O J E C T S --------------------------------

    ReactP: [
      {
        title: 'Website',
        id: 'Website',
        thumbnail: website,
        images: [website],
        software: ['Adobe Illustrator', 'Adobe Photoshop'],
        description: '2D online multiplayer game made in Unity',
        partners: '3D UI programmer/UX designer',
        role:
          'Created futuristic UI buttons, panels, etc. and space background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
    ],

    //-------------------------------- P L U S H  P R O J E C T S --------------------------------

    PlushP: [
      {
        title: 'Yummy World Milk and Cookies',
        id: 'MilkAndCookies',
        thumbnail: YW_milk2,
        images: [
          YW_milk,
          YW_milk2,
          YW_milk3,
          YW_milk4,
          YW_milk5,
          YW_milk6,
          YW_milk7,
          YW_milk8,
          YW_milk9,
          YW_milk10,
        ],
        software: ['Adobe Illustrator'],
        description:
          'This Yummy World plush packs three removable fresh-baked chocolate chip cookie plushies inside a large plush YUM-MOO Milk carton.',
        partners: 'individual partners',
        role: 'Design a large Milk and Cookies plush for Yummy World.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'Yummy World Chips and Guac',
        id: 'ChipsAndGuac',
        thumbnail: YW_chips,
        images: [
          YW_chips,
          YW_chips2,
          YW_chips3,
          YW_chips4,
          YW_chips5,
          YW_chips6,
        ],
        software: ['Adobe Illustrator'],
        description:
          'Yummy World welcomes everyone’s favorite dip and chips with the large plush Chips & Guac!',
        partners: 'individual partners',
        role: 'Design a large Yummy World Chips and Guac plush.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'Icecream Upsidedown',
        id: 'Icecream',
        thumbnail: YW_cone2,
        images: [YW_cone, YW_cone2, YW_cone3, YW_cone4],
        software: ['Adobe Illustrator'],
        description:
          'Introducing your snuggly, cool but a little clumsy new plushie ice cream friend with the Yummy World Walter Waffle Cone Ice Cream Scoop Plush.',
        partners: 'individual project',
        role: 'Design a small upside down ice cream cone for Yummy World.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
    ],

    //-------------------------------- I L L U S T R A T I O N  P R O J E C T S --------------------------------

    IllustP: [
      {
        title: 'Openminded',
        id: 'OpenMinded',
        thumbnail: openminded,
        images: [openminded],
        software: ['Adobe Illustrator'],
        description:
          'This illustration tells a story of a brain that opened their third eye.',
        partners: 'personal project',
        role: 'Illustrate a story of a brain who opens his mind to the world.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'Chunky the Hamster',
        id: 'Hamster',
        thumbnail: hamster,
        images: [hamster],
        software: ['Adobe Illustrator'],
        description: 'Chunky the Hamster loves to eat wontons.',
        partners: 'personal project',
        role: 'Create an illustration of a hamster.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'Travis Barker Portrait',
        id: 'TravisBarker',
        thumbnail: travis,
        images: [travis],
        software: ['graphite pencil'],
        description: 'A portrait of Travis Barker.',
        partners: 'personal project',
        role: 'Create a hand drawn portrait.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },

      {
        title: 'Direwolf',
        id: 'WhiteWolf',
        thumbnail: wolf,
        images: [wolf],
        software: ['Adobe Illustrator'],
        description:
          'This was a direwolf illustration I made for a phone background.',
        partners: 'personal project',
        role: 'Design a phone background.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },
      {
        title: 'IT sketch',
        id: 'IT',
        thumbnail: it,
        images: [it],
        software: ['Adobe Photoshop'],
        description: 'A sketch made in procreate.',
        partners: 'personal project',
        role: 'Create a sketch in procreate.',
        demo: 'https://www.youtube.com/watch?v=NHCpUvQA9uE&feature=youtu.be',
      },

      {
        title: 'Dream - Mischief',
        id: 'Mischief',
        thumbnail: mischief,
        images: [mischief],
        software: ['Adobe Illustrator'],
        description: 'This was a dream that I recreated in Illustrator.',
        partners: 'personal project',
        role: 'Recreate dream using Adobe Illustrator.',
      },
    ],
  },
};

export default data;
