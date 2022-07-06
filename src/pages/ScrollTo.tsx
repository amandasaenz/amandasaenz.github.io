import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// export const ScrollTo: React.FC = () => {
//   const { pathname } = useLocation();

//   console.log(pathname);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// interface IScroll {
//   component: string;
// }

export const ScrollTo: React.FC = () => {
  const { pathname } = useLocation();

  // console.log(component);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
