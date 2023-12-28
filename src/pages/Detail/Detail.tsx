import React from 'react';
import Layout from '../../components/templates/Layout/Detail';
import Recommended from '../../components/organisms/Recommended/Recommended';

const Home: React.FC = () => {
  return (
    <Layout>
      <Recommended />
    </Layout>
  );
};

export default Home;
