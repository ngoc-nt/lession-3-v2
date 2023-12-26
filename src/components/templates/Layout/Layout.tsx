import React from 'react';
import Header from '../../organisms/Header/Header';
import { Container } from 'react-bootstrap';
import Slider from '../../organisms/Slider/Slider';

type TLayout = {
  children?: React.ReactNode;
};

const Layout: React.FC<TLayout> = ({ children }) => {
  return (
    <Container fluid className='container-fluid-full'>
      <Header />
      <Slider />
      <main className='main-content pb-10'>
        <Container>{children}</Container>
      </main>
    </Container>
  );
};

export default Layout;
