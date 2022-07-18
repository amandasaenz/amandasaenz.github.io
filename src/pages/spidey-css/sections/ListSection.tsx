import React, { useContext } from 'react';
import { Container } from '../SpideyCSS';
import ThemeContext from '../../../theme/ThemeContext';
import Themes from '../../../theme/Themes';
import List from '../../../reusable-components/List';
import { Heading } from '../../Typography';

const ListSection: React.FC = () => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <Heading>List Item</Heading>

      <Container color={theme.caption}>
        <List>List</List>
        <List circle>List</List>
      </Container>
    </div>
  );
};

export default ListSection;
