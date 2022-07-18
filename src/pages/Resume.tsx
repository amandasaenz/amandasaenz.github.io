import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import List from '../reusable-components/List';
import { Theme } from '../theme/Themes';
import Label from '../reusable-components/Label';
import Typography from '../reusable-components/Typography';
import { LinkWHref as Link } from '../reusable-components/Link';
import { MutableRefObject } from 'react';
import { Heading, Title } from './Typography';

interface IResume extends Theme {
  ref?: MutableRefObject<HTMLDivElement>;
}

const Resume = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <StyledResume ref={ref}>
      <div style={{ display: 'grid', gap: '24px' }}>
        <Heading>Contact</Heading>

        <div style={{ display: 'grid', gap: '8px' }}>
          <Label icon='email'>amanda.blakely7@gmail.com</Label>
          <Label icon='phone'>(361)232-9436</Label>
          <Label icon='location'>Colorado Springs, CO</Label>

          <Link href='https://github.com/amandasaenz'>Github</Link>

          <Link href='https://www.linkedin.com/in/amandasnoww/'>Linkedin</Link>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gap: '24px',
          maxWidth: '550px',
        }}
      >
        <Heading>Skills</Heading>

        <div
          style={{
            display: 'grid',
            gap: '8px',
          }}
        >
          <List>Figma</List>
          <List>HTML5</List>
          <List>CSS3</List>
          <List>React</List>
          <List>Typescript</List>
          <List>Adobe XD</List>
          <List>Storybook</List>
          <List>Illustrator</List>
          <List>Zbrush</List>
        </div>
      </div>
      <div style={{ display: 'grid', gap: '24px' }}>
        <Heading>Educaton</Heading>

        <div style={{ display: 'grid', gap: '16px' }}>
          <Typography lowercase variant='h6'>
            Texas A&#38;M University - Corpus Christi
          </Typography>

          <List>Bachelor of Computer Science</List>
        </div>
      </div>
      <div style={{ display: 'grid', gap: '24px', maxWidth: '550px' }}>
        <Heading>Work Experience</Heading>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'end' }}>
          <Typography variant='h6'>Kidrobot</Typography>
          <Typography variant='caption'>remote</Typography>
        </div>
        <div style={{ display: 'grid', gap: '16px' }}>
          <Role>
            <Typography lowercase variant='h6'>
              Creative Lead
            </Typography>
            <Typography variant='caption'>April 2022 - current</Typography>
          </Role>
          <div style={{ display: 'grid', gap: '8px' }}>
            <List>
              Communicate with development on products currently being made
            </List>
            <List>Design toy concepts and sculpt vinyl toys within Zbrush</List>
            <List>Create and assign task projects to my team</List>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px' }}>
          <Role>
            <Typography lowercase variant='h6'>
              Senior Digital Sculptor
            </Typography>
            <Typography variant='caption'>July 2020 - April 2022</Typography>
          </Role>
          <div style={{ display: 'grid', gap: '8px' }}>
            <List>
              Collaborated with designers and licensors such as Disney, Sanrio,
              Nickelodeon, and more to produce 3D vinyl figures
            </List>
            <List>Render digital sculpts in Keyshot</List>
          </div>
        </div>
        <div style={{ display: 'grid', gap: '16px' }}>
          <Role>
            <Typography lowercase variant='h6'>
              Digital Sculptor
            </Typography>
            <Typography variant='caption'>June 2019 - July 2020</Typography>
          </Role>

          <div style={{ display: 'grid', gap: '8px' }}>
            <List>Sculpted toys digitally within Zbrush</List>
            <List>Designed plush toys for Kidrobot’s Yummy World line</List>
            <List>Concept plush and vinyl toys for different licensors</List>
          </div>
        </div>
      </div>
    </StyledResume>
  );
});

export default Resume;

const StyledResume = styled.div`
  display: grid;
  gap: 3rem;
  padding-top: 32px;
`;

const Role = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 630px) {
    flex-direction: column;
  }
`;
