import React from 'react';
import Header from '../../organisms/Header/Header';
import { Container } from 'react-bootstrap';
import Video from '../../organisms/Video/Video';

type TLayout = {
  children?: React.ReactNode;
};

const Layout: React.FC<TLayout> = ({ children }) => {
  return (
    <Container fluid className='container-fluid-full'>
      <Header />
      <main className='main-content pb-10'>
        <Video />
        <Container>{children}</Container>
      </main>
    </Container>
  );
};

export default Layout;
