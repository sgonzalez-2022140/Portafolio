import React, { useState } from 'react';
import styled from 'styled-components';
import { FaJs, FaReact, FaNode, FaJava } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Section = styled.section`
  margin-bottom: 3rem;
  padding-top: 60px;
  position: relative;
`;

const SectionHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionText = styled.p`
  color: white;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #2c2c2c;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  margin: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h4`
  color: white;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #ccc;
  font-size: 0.9rem;
`;

const Modal = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  background: #2c2c2c;
  padding: 2rem;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ModalTitle = styled.h4`
  color: white;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalBody = styled.div`
  color: white;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Gestion de datos",
      description: "Sistema de camaras en Java con swings",
      image: "/4to.jpeg"
    },
    {
      title: "Tony´s Kinal",
      description: "Sistema de camaras en Java con JavaFX",
      image: "/5to.jpeg"
    },
    {
      title: "Proyecto Almacenadora",
      description: "Sistema hecho en stack MERN",
      image: "/Almacenadora.jpeg"
    },
    {
      title: "ANSAR (En desarrollo)",
      description: "Sistema hecho en stack MERN",
      image: "/Ansar.jpg"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Section id="portfolio">
      <SectionHeading>Portfolio</SectionHeading>
      <SectionText>Estos son unos proyectos que hice</SectionText>
      <CardContainer>
        {projects.map((project, index) => (
          <Card key={index} onClick={() => openModal(project)}>
            <CardImage src={project.image} alt={project.title} />
            <CardContent>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CardContainer>
      {selectedProject && (
        <Modal isOpen={isModalOpen}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>{selectedProject.title}</ModalTitle>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </ModalHeader>
            <ModalBody>
              <p>Tecnologias que se usaron:</p>
              <IconContainer>
                {selectedProject.title === "Gestion de datos" || selectedProject.title === "Tony´s Kinal" ? (
                  <FaJava size={30} />
                ) : (
                  <>
                    <FaJs size={30} />
                    <FaReact size={30} />
                    <FaNode size={30} />
                    <SiMongodb size={30} />
                  </>
                )}
              </IconContainer>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Section>
  );
};

export default Portfolio;
