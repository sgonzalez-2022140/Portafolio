import React from 'react';
import styled from 'styled-components';
import yo from '../assets/yo.png';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  
  overflow: hidden;
  padding-top: 0.5rem;
`;

const GlassBox = styled.div`
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%; 
  max-width: 1550px; 
  margin: 1rem auto;
`;

const ProfileImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

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

export const Inicio = () => {
  return (
    <Container>
      <GlassBox>
        <div className="flex flex-col items-center mb-12">
          <ProfileImage src={yo} alt="Santiago Gonzalez" />
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
        </div>

        <Section id="about">
          <SectionHeading>About</SectionHeading>
          <SectionText>
            Aquí puedes escribir sobre ti.
          </SectionText>
        </Section>

        <Section id="skills">
          <SectionHeading>Skills</SectionHeading>
          <SectionText>
            Aquí puedes escribir sobre tus habilidades.
          </SectionText>
        </Section>

        <Section id="portfolio">
          <SectionHeading>Portfolio</SectionHeading>
          <SectionText>
            Aquí puedes mostrar tu trabajo.
          </SectionText>
        </Section>
      </GlassBox>
    </Container>
  );
};
