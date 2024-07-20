import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 3rem;
  padding-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
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

const Image = styled.img`
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  max-width: 100%;
`;

const About = () => {
  return (
    <Section id="about">
      <TextContainer>
        <SectionHeading>Acerca de mí</SectionHeading>
        <SectionText>
          Soy un apasionado del arte en todas sus formas. Me encanta la danza y he dedicado gran parte de mi tiempo a 
          perfeccionar mis habilidades en este campo. Además, disfruto enormemente de los videojuegos y he tenido la oportunidad de
          competir a nivel profesional, lo cual ha sido una experiencia increíblemente enriquecedora. Viajar es otra de mis grandes pasiones; 
          me fascina explorar nuevos lugares, conocer diferentes culturas y aprender de cada rincón del mundo que visito. 
          Siempre busco nuevas aventuras y desafíos que me permitan crecer tanto personal como profesionalmente.
        </SectionText>
      </TextContainer>
      <ImageContainer>
        <Image src="/yo.jpeg" alt="Santiago Gonzalez" />
      </ImageContainer>
    </Section>
  );
};

export default About;
