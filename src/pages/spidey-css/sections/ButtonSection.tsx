// import React, { useContext } from 'react';
// import { Container } from '../SpideyCSS';
// import Typography from '../../../reusable-components/Typography';
// import { Button, ButtonIcon } from '../../../reusable-components/Button';
// import ThemeContext from '../../../theme/ThemeContext';
// import Themes from '../../../theme/Themes';
// import { Heading, Subheading } from '../../Typography';

// const ButtonSection: React.FC = () => {
//   const { dark } = useContext(ThemeContext);
//   const theme = Themes[dark === false ? 'light' : 'dark'];

//   return (
//     <div style={{ display: 'grid', gap: '24px' }}>
//       <Heading>Button</Heading>

//       <Container color={theme.caption}>
//         <div style={{ display: 'grid', gap: '48px' }}>
//           <div style={{ display: 'grid', gap: '16px' }}>
//             <div style={{ display: 'flex', gap: '16px' }}>
//               <ButtonIcon />
//               <ButtonIcon color='primary' />
//               <ButtonIcon color='secondary' />
//               <ButtonIcon color='caption' />
//               <ButtonIcon disabled />
//             </div>

//             <div style={{ display: 'flex', gap: '16px' }}>
//               <Button>default</Button>
//               <Button color='primary'>primary</Button>
//               <Button color='secondary'>secondary</Button>
//               <Button color='caption'>caption</Button>
//               <Button disabled>disabled</Button>
//             </div>
//           </div>

//           <div style={{ display: 'grid', gap: '16px' }}>
//             <div style={{ display: 'flex', gap: '16px' }}>
//               <ButtonIcon variant='outlined' />
//               <ButtonIcon variant='outlined' color='primary' />
//               <ButtonIcon variant='outlined' color='secondary' />
//               <ButtonIcon variant='outlined' color='caption' />
//               <ButtonIcon variant='outlined' disabled />
//             </div>

//             <div style={{ display: 'flex', gap: '16px' }}>
//               <Button variant='outlined'>default</Button>
//               <Button variant='outlined' color='primary'>
//                 primary
//               </Button>
//               <Button variant='outlined' color='secondary'>
//                 secondary
//               </Button>
//               <Button variant='outlined' color='caption'>
//                 caption
//               </Button>
//               <Button variant='outlined' disabled>
//                 disabled
//               </Button>
//             </div>
//           </div>

//           <div style={{ display: 'grid', gap: '16px' }}>
//             <div style={{ display: 'flex', gap: '16px' }}>
//               <ButtonIcon variant='contained' />
//               <ButtonIcon variant='contained' color='primary' />
//               <ButtonIcon variant='contained' color='secondary' />
//               <ButtonIcon variant='contained' color='caption' />
//               <ButtonIcon variant='contained' disabled />
//             </div>

//             <div style={{ display: 'flex', gap: '16px' }}>
//               <Button variant='contained'>default</Button>
//               <Button variant='contained' color='primary'>
//                 primary
//               </Button>
//               <Button variant='contained' color='secondary'>
//                 secondary
//               </Button>
//               <Button variant='contained' color='caption'>
//                 caption
//               </Button>
//               <Button variant='contained' disabled>
//                 disabled
//               </Button>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default ButtonSection;

import React, { useContext } from 'react';
import { Container } from '../SpideyCSS';
import Typography from '../../../reusable-components/Typography';
import { Button, ButtonIcon } from '../../../reusable-components/Button';
import ThemeContext from '../../../theme/ThemeContext';
import Themes from '../../../theme/Themes';
import { Heading, Subheading } from '../../Typography';

const ButtonSection: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <Heading>Button</Heading>

      <Container color={theme.caption}>
        <div style={{ display: 'grid', gap: '48px' }}>
          <div
            style={{
              display: 'grid',
              gridGap: '16px',
              gridTemplateColumns: `repeat(5, 48px)`,
            }}
          >
            <ButtonIcon />
            <ButtonIcon color='primary' />
            <ButtonIcon color='secondary' />
            <ButtonIcon color='caption' />
            <ButtonIcon disabled />

            <ButtonIcon variant='outlined' />
            <ButtonIcon variant='outlined' color='primary' />
            <ButtonIcon variant='outlined' color='secondary' />
            <ButtonIcon variant='outlined' color='caption' />
            <ButtonIcon variant='outlined' disabled />

            <ButtonIcon variant='contained' />
            <ButtonIcon variant='contained' color='primary' />
            <ButtonIcon variant='contained' color='secondary' />
            <ButtonIcon variant='contained' color='caption' />
            <ButtonIcon variant='contained' disabled />
          </div>

          <div
            style={{
              display: 'grid',
              gridGap: '16px',
              gridTemplateColumns: `repeat(5, auto)`,
            }}
          >
            <Button>default</Button>
            <Button color='primary'>primary</Button>
            <Button color='secondary'>secondary</Button>
            <Button color='caption'>caption</Button>
            <Button disabled>disabled</Button>

            <Button variant='outlined'>default</Button>
            <Button variant='outlined' color='primary'>
              primary
            </Button>
            <Button variant='outlined' color='secondary'>
              secondary
            </Button>
            <Button variant='outlined' color='caption'>
              caption
            </Button>
            <Button variant='outlined' disabled>
              disabled
            </Button>

            <Button variant='contained'>default</Button>
            <Button variant='contained' color='primary'>
              primary
            </Button>
            <Button variant='contained' color='secondary'>
              secondary
            </Button>
            <Button variant='contained' color='caption'>
              caption
            </Button>
            <Button variant='contained' disabled>
              disabled
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ButtonSection;
