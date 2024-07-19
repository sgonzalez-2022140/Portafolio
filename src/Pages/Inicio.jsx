import React from 'react';
import styled from 'styled-components';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
//Componentes
import About from '../Components/Sections/About';
import Skills from '../Components/Sections/Skills';
import Portfolio from '../Components/Sections/Portafolio';

const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding-top: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GlassBox = styled.div`
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1250px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 769px) {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0;
  @media (min-width: 769px) {
    align-items: flex-start;
    margin-left: 2rem;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  color: white;
  text-align: center;
  @media (min-width: 769px) {
    text-align: left;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  @media (min-width: 769px) {
    justify-content: flex-start;
  }
`;

const Section = styled.div`
  width: 95%;
  margin-bottom: 1.5rem;
`;

export const Inicio = () => {
  return (
    <Container>
      <GlassBox>
        <ProfileSection>
          <TextSection>
            <Heading>Hola, Me llamo Santiago Gonzalez</Heading>
            <Text>
              Soy un desarrollador apasionado por crear aplicaciones web y soluciones innovadoras. Mi objetivo es utilizar la tecnología para mejorar la vida de las personas y resolver problemas complejos de manera eficiente.
            </Text>
            <IconsContainer>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaGithub size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaLinkedin size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaTwitter size={30} />
              </a>
            </IconsContainer>
          </TextSection>
        </ProfileSection>
        <Section>
          <About />
        </Section>
        <Section>
          <Skills />
        </Section>
        <Section>
          <Portfolio />
        </Section>
      </GlassBox>
    </Container>
  );
};