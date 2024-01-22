import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/templates/Layout/Detail';
import Recommended from '../../components/organisms/Recommended/Recommended';
import Description from '../../components/molecules/VideoDetail';
import { AppProvider } from '../../Context/AppContext';
import Comments from '../../components/molecules/Comments';
import { getMovieDetails } from '../../utils';
import Video from '../../components/organisms/Video';
import VideoChap from '../../components/organisms/VideoChapter';

const Home: React.FC = () => {
  const movieId = useParams();
  const id = useParams();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState<number | null>(null);
  const handleSelectSeason = (videoKey: string, seasonIndex: number) => {
    setSelectedVideo(videoKey);
    setSelectedSeasonIndex(seasonIndex);
  };

  useEffect(() => {
    const fetchData = async () => {        
      try {
        const videoMovies = await getMovieDetails(movieId.id);
        if (videoMovies && videoMovies.video && videoMovies.video.length > 0) {
          setSelectedVideo(videoMovies.video[0].key);
        } else {
          console.error('Video details not available');
        }
        setSelectedSeasonIndex(0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [movieId]);
  
  return (
    <AppProvider>
      <Layout>
        <Video movie={{id: movieId.id, video: selectedVideo}} />
        <Description movieId={movieId.id}/>
        <VideoChap movieId={movieId.id} onSelectSeason={handleSelectSeason} selectedSeasonIndex={selectedSeasonIndex} />
        <Recommended/>
        <Comments movieId={movieId.id}/>
      </Layout>
    </AppProvider>
  );
};

export default Home;
