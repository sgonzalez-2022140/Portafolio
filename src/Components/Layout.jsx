import React from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Content = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  color: white;
  position: relative;
  z-index: 1; 
  padding: 1rem; // Reduce el padding
  display: flex;
  align-items: flex-start; 
  justify-content: center;
`;

const Bubble = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: float 15s infinite ease-in-out;
  opacity: 0.15;
`;

const Layout = ({ children }) => {
  return (
    <MainContainer>
      <Navbar />
      <Bubble className="bubble bubble1" />
      <Bubble className="bubble bubble2" />
      <Bubble className="bubble bubble3" />
      <Bubble className="bubble bubble4" />
      <Bubble className="bubble bubble5" />
      <Bubble className="bubble bubble6" />
      <Bubble className="bubble bubble7" />
      <Bubble className="bubble bubble8" />
      <Bubble className="bubble bubble9" />
      <Bubble className="bubble bubble10" />
      <Bubble className="bubble bubble11" />
      <Bubble className="bubble bubble12" />
      <Content>
        {children}
      </Content>
    </MainContainer>
  );
};

export default Layout;
