import React, { useRef, forwardRef } from 'react';
import Title from './Title';
import Sculpt from './Sculpt';
import UX from './UX';
import Resume from './Resume';

// const Home: React.FC = () => {
//   return (
//     <>
//       <Title id='#' />
//       <Sculpt id='3d-art' />
//       <UX id='front-end' />
//       <Resume id='resume' />
//     </>
//   );
// };
const Home = forwardRef<HTMLDivElement>((props, ref) => {
  // const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  // console.log(ref);
  return (
    <>
      <Title ref={ref} />
      <Sculpt ref={ref} />
      <UX ref={ref} />
      <Resume ref={ref} />
    </>
  );
});

export default Home;
