import React from 'react';
import styled from 'styled-components';

import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

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
  margin-bottom: 2rem;
  width: 100%;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('https://www.guatevalley.com/photo/photo_a1/19572/NDN4x7sYwQXsHgVHkUnh.jpg') no-repeat center center/cover;
    filter: blur(5px); /* Ajusta el nivel de desenfoque aquí */
    z-index: -1;
  }

  @media (min-width: 769px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0;
  @media (min-width: 769px) {
    align-items: center;
    margin-left: 0;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  font-style: italic;
`;

const Text = styled.p`
  color: white;
  text-align: center;
  max-width: 800px;
  margin-bottom: 1rem;
  @media (min-width: 769px) {
    text-align: center;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  @media (min-width: 769px) {
    justify-content: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
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
            <SubHeading>Hi this is</SubHeading>
            <Heading>Santiago Gonzalez</Heading>
            <SubHeading>Software developer in Amatitlan, Guatemala</SubHeading>
            <Text>
              Soy un desarrollador apasionado por crear aplicaciones web y soluciones innovadoras. Mi objetivo es utilizar la tecnología para mejorar la vida de las personas y resolver problemas complejos de manera eficiente.
            </Text>
            <IconsContainer>
              <a href="https://github.com/sgonzalez-2022140" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/santiago-elisardo-gonzález-herrera-2a4397270/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.youtube.com/@pampichi8271" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaYoutube size={30} />
              </a>
              <a href="https://www.instagram.com/don_pampichi/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaInstagram size={30} />
              </a>              
            </IconsContainer>
            <Button href="/CV_Actualizado.pdf" download>Descarga mi CV</Button>
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