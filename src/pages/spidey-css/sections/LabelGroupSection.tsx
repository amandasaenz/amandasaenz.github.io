// import React, { useContext } from 'react';
// import styled from '@emotion/styled';
// import { Container } from '../SpideyCSS';
// import Typography from '../../../reusable-components/Typography';

// import { IconLabel, Label } from '../../../reusable-components/Label';
// import ThemeContext from '../../../theme/ThemeContext';
// import Themes from '../../../theme/Themes';
// import { Heading, Subheading } from '../../Typography';

// const LabelGroupSection: React.FC = () => {
//   const { dark } = useContext(ThemeContext);
//   const theme = Themes[dark === false ? 'light' : 'dark'];

//   return (
//     <div style={{ display: 'grid', gap: '24px' }}>
//       <Heading>Label Group</Heading>
//       <Container color={theme.caption}>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <Label>Label</Label>
//           <Line />
//           <Label>Label</Label>
//           <Line />
//           <Label>Label</Label>
//           <Line />
//           <Label>Label</Label>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <IconLabel email>Label</IconLabel>
//           <Line />
//           <IconLabel charge>Label</IconLabel>
//           <Line />
//           <IconLabel bookmark>Label</IconLabel>
//           <Line />
//           <IconLabel edit>Label</IconLabel>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default LabelGroupSection;

// const Line = styled.div`
//   height: 16px;
//   min-width: 1px;
//   background-color: #ff6561;
//   margin: 0px 8px 0px 8px;
// `;

import React, { useContext } from 'react';
import { Container } from '../SpideyCSS';
import Label from '../../../reusable-components/Label';
import ThemeContext from '../../../theme/ThemeContext';
import Themes from '../../../theme/Themes';
import { Heading } from '../../Typography';
import Labels from '../../../reusable-components/Labels';

const LabelGroupSection: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <Heading>Label Group</Heading>
      <Container color={theme.caption}>
        <Labels>
          <Label>Label</Label>
          <Label>Label</Label>
          <Label>Label</Label>
          <Label>Label</Label>
        </Labels>
        <Labels>
          <Label icon='email'>Label</Label>
          <Label icon='charge'>Label</Label>
          <Label icon='bookmark'>Label</Label>
          <Label icon='edit'>Label</Label>
        </Labels>
      </Container>
    </div>
  );
};

export default LabelGroupSection;
