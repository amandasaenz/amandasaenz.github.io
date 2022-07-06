import overdrive from '../images/overdrive.jpg';
import crashMario from '../images/crash.jpg';
import cm2 from '../images/crash2.jpg';
import cm3 from '../images/crash3.jpg';
import demona from '../images/demona.png';
import bb from '../images/bb.jpg';
import hkKaiju from '../images/kaiju.jpg';

export interface DataProps {
  title: string;
  id: string;
  thumbnail: string;
  images: string[];
  software: string[];
  description: string;
  demo?: string;
}

const data: DataProps[] = [
  {
    title: 'Josh Divine X Super Crash Bro',
    id: 'crash-mario',
    thumbnail: crashMario,
    images: [crashMario, cm2, cm3],
    software: ['Zbrush', 'Keyshot'],
    description:
      'Super Crash Bro is the 2nd “Crash” series toy by Josh Divine. My role was to turn his 2D design into 3D, using Pixologic Zbrush for sculpting, and KeyShot for rendering.',
    demo: 'https://www.strangecattoys.com/products/super-crash-bro-by-josh-divine',
  },
  {
    title: 'Overdrive Madness',
    id: 'overdrive-madness',
    thumbnail: overdrive,
    images: [overdrive],
    software: ['Zbrush', 'Maya', 'Renderman'],
    description:
      'I created myself in the world of one of my favorite Insomniac games, Sunset Overdrive. I created the concept and 3D sculpt.',
    demo: 'https://www.youtube.com/watch?v=RUow-32R73w&feature=youtu.be',
  },

  {
    title: 'Demona - Disney X Kidrobot',
    id: 'demona',
    thumbnail: demona,
    images: [demona],
    software: ['Zbrush', 'Keyshot'],
    description:
      'I worked closely with a designer to produce a series of 3D vinyl figures for Disney, Utilizing Zbrush and Keyshot',
  },

  {
    title: 'Bowlhead Banks',
    id: 'bowlhead-banks',
    thumbnail: bb,
    images: [bb],
    software: ['Zbrush', 'Maya', 'Renderman'],
    description: 'I created Bowlhead Banks to study XGen, a hair simulator.',
  },

  {
    title: 'Kidrobot X Hello Kitty Kaiju',
    id: 'hellokitty-kaiju',
    thumbnail: hkKaiju,
    images: [hkKaiju],
    software: ['Zbrush', 'Keyshot'],
    description:
      'Hello Kitty Kaiju destroys the city. I worked closely with a Designer. My role was to turn a 2D design into a 3D sculpt. I digitally painted the toy and rendered multiple colorways in Keyshot.',
  },
];

export default data;
