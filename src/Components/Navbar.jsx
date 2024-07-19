import styled from 'styled-components';
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const NavbarContainer = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c0f1a;
  position: relative;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    gap: 1rem;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 1rem 2rem;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    animation: dropdown 0.3s ease;
    @keyframes dropdown {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    color: #00ffff;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer>
      <HamburgerMenu onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </HamburgerMenu>
      <NavLinks isOpen={isOpen}>
        {location.pathname === '/' ? (
          <>
            <ScrollLink to="inicio" smooth={true} duration={500} onClick={closeMenu}>
              <NavLink>Home</NavLink>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>
              <NavLink>About</NavLink>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} onClick={closeMenu}>
              <NavLink>Skills</NavLink>
            </ScrollLink>
            <ScrollLink to="portfolio" smooth={true} duration={500} onClick={closeMenu}>
              <NavLink>Portfolio</NavLink>
            </ScrollLink>
          </>
        ) : (
          <RouterLink to="/" onClick={closeMenu}>
            <NavLink>Home</NavLink>
          </RouterLink>
        )}
        <RouterLink to="/contacto" onClick={closeMenu}>
          <NavLink>Contact</NavLink>
        </RouterLink>
      </NavLinks>
    </NavbarContainer>
  );
};