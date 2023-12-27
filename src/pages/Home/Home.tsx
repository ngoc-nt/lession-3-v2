import React from 'react';
import Layout from '../../components/templates/Layout/Layout';
import RecentlyUpdated from '../../components/organisms/RecentlyUpdated/RecentlyUpdated';
import Trending from '../../components/organisms/Trending/Trending';
import Movie from '../../components/organisms/Movie/Movie';
import Series from '../../components/organisms/Series/Series';
import Recommended from '../../components/organisms/Recommended/Recommended';
import { AppProvider } from '../../context/AppContext';

const Home: React.FC = () => {
  return (
    <AppProvider>
      <Layout>
        <RecentlyUpdated />
        <Trending />
        <Movie />
        <Series />
          <Recommended/>
      </Layout>
    </AppProvider>
  );
};

export default Home;
