// Skills.jsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 3rem;
  padding-top: 60px;
`;

const SectionHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
`;

const SectionText = styled.p`
  color: white;
`;

const Skills = () => {
  return (
    <Section id="skills">
      <SectionHeading>Skills</SectionHeading>
      <SectionText>
        Aquí puedes escribir sobre tus habilidades.
      </SectionText>
      
    </Section>
  );
};

export default Skills;
