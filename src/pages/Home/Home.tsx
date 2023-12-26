import React from 'react';
import Layout from '../../components/templates/Layout/Layout';
import RecentlyUpdated from '../../components/organisms/RecentlyUpdated/RecentlyUpdated';
import Trending from '../../components/organisms/Trending/Trending';
import Movie from '../../components/organisms/Movie/Movie';
import Series from '../../components/organisms/Series/Series';
import Recommended from '../../components/organisms/Recommended/Recommended';
import { useGenres } from "../../api";

interface Genre {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const genresList: Genre[] = useGenres();

  return (
    <Layout genresList={genresList}>
      <RecentlyUpdated />
      <Trending />
      <Movie />
      <Series />
        <Recommended genresList={genresList}/>
    </Layout>
  );
};

export default Home;
