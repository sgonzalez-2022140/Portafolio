import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaJs, FaReact, FaVuejs, FaJava, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiLinux, SiAdobephotoshop, SiAdobepremierepro } from 'react-icons/si';
import { FiGlobe } from 'react-icons/fi';

const Section = styled.section`
  margin-bottom: 3rem;
  padding-top: 60px;
`;

const SectionHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const IconContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.svg`
  width: 100px;
  height: 100px;
  transform: rotate(-90deg);
  circle {
    stroke-dasharray: 157;
    stroke-dashoffset: ${(props) => (1 - props.percentage) * 157};
    transition: stroke-dashoffset 1s ease-out;
    stroke: ${(props) => props.color};
    stroke-width: 10;
    fill: none;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
`;

const SkillText = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: center;
`;

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { icon: <FaJs />, color: '#f7df1e', percentage: 0.6, label: 'JavaScript' },
    { icon: <FaReact />, color: '#61dafb', percentage: 0.8, label: 'React' },
    { icon: <FaVuejs />, color: '#42b883', percentage: 0.5, label: 'Vue.js' },
    { icon: <FaJava />, color: '#007396', percentage: 0.5, label: 'Java' },
    { icon: <SiMongodb />, color: '#47A248', percentage: 0.65, label: 'MongoDB' },
    { icon: <SiMysql />, color: '#4479A1', percentage: 0.5, label: 'MySQL' },
    { icon: <FiGlobe />, color: '#1E90FF', percentage: 0.9, label: 'Inglés' },
    { icon: <SiAdobephotoshop />, color: '#31A8FF', percentage: 0.75, label: 'Photoshop' },
    { icon: <SiLinux />, color: '#FCC624', percentage: 0.35, label: 'Linux' },
    { icon: <FaCss3Alt />, color: '#1572B6', percentage: 0.7, label: 'CSS' },
    { icon: <SiAdobepremierepro />, color: '#9999FF', percentage: 0.4, label: 'Premiere Pro' },
  ];

  return (
    <Section id="skills" ref={sectionRef}>
      <SectionHeading>Skills</SectionHeading>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skill key={index}>
            <IconContainer>
              <Circle color={skill.color} percentage={isVisible ? skill.percentage : 0}>
                <circle cx="50" cy="50" r="25" />
              </Circle>
              <Icon>{skill.icon}</Icon>
            </IconContainer>
            <SkillText>{skill.label}</SkillText>
            <SkillText>{isVisible ? skill.percentage * 100 : 0}%</SkillText>
          </Skill>
        ))}
      </SkillsContainer>
    </Section>
  );
};

export default Skills;

