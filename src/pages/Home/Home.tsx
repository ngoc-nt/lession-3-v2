import React from 'react';
import Layout from '../../components/templates/Layout/Layout';
import RecentlyUpdated from '../../components/organisms/RecentlyUpdated/RecentlyUpdated';
import Trending from '../../components/organisms/Trending/Trending';
import Movie from '../../components/organisms/Movie/Movie';
import Series from '../../components/organisms/Series/Series';
import Recommended from '../../components/organisms/Recommended/Recommended';

const Home: React.FC = () => {
  return (
    <Layout>
      <RecentlyUpdated />
      <Trending />
      <Movie />
      <Series />
        <Recommended />
    </Layout>
  );
};

export default Home;
