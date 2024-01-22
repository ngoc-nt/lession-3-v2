import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import ChapterCard from './ChapterCard';
import styles from '../../../css/VideoChap.module.scss';
import { fetchDataFromApi } from '../../../utils';

interface SeasonMoviesProps {
    movieId: string | undefined;
    onSelectSeason: (videoKey: string, seasonIndex: number) => void;
    selectedSeasonIndex: number | null;
}

interface MovieDetails {
  id: string | undefined;
  video: any[];
}

const VideoChap: React.FC<SeasonMoviesProps> = ({ movieId, onSelectSeason, selectedSeasonIndex }) => {
  const [seasons, setSeasons] = useState<MovieDetails>();
  useEffect(() => {
    const fetchData = async () => {
      try {        
        const response = await fetchDataFromApi(`movie/${movieId}/videos`);
        const datas = {
          id: movieId,
          video: response.results.slice(0,6),
        }
        setSeasons(datas);
      } catch (error) {
        console.error('Error fetching data season 123:', error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <section className='season pt-5 pb-3'>
        <div className='d-flex'>
          <div className={`${styles.sectionTitle}`}>Season 1</div>
          <Image className='ms-3' src='/assets/svg/icon-arrow-down.svg' alt='arrow' />
        </div>
        <div className='row mt-4'>
        {seasons && seasons.video.map((season: any, index) => (
            <div className='col-md-6 mb-4' key={index}>
              <ChapterCard
                seasonData={season}
                index={index}
                onSelect={() => onSelectSeason(season.key, index)}
                isSelected={index === selectedSeasonIndex}
              />
            </div>
          ))}
        </div>
    </section>
  );
}

export default VideoChap;
