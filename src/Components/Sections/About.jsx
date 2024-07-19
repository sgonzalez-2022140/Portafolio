// About.jsx
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

const About = () => {
  return (
    <Section id="about">
      <SectionHeading>About</SectionHeading>
      <SectionText>
        Aquí puedes escribir sobre ti.
      </SectionText>
    </Section>
  );
};

export default About;
