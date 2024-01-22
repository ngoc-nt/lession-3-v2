import React from 'react';
import styles from './SeriesCard.module.scss';
import { Card, Image } from 'react-bootstrap'; 
import { getImageUrl , useClock, getRandomQuality} from "../../../utils";
import { Link } from 'react-router-dom';

export type TSeriesCard = {
  releaseMovie: any;
};

const SeriesCard: React.FC<TSeriesCard> = ({releaseMovie}) => {
  return (
    <Link to={`/movie/${releaseMovie && releaseMovie.id}`}>
      <Card className='main-content'>
        <div className='position-relative'>
          <Card.Img variant='top' src={getImageUrl(releaseMovie && releaseMovie.poster_path)} alt={releaseMovie.title}/>
            <div className={`position-absolute d-flex align-items-center ${styles.series}`}>
              <span className={`badge ${styles.bgColorRed}`}>{releaseMovie && releaseMovie.status}</span>
            </div>
        </div>
        <div className={`d-xl-flex justify-content-between align-items-center mt-3 ${styles.content}`}>
          <div className={`${styles.title}`}>{releaseMovie && releaseMovie.title}</div>
          <div className='d-flex'>
            <div className={`me-2 p-1 ${styles.quality}`}>{getRandomQuality()}</div>
              <div className={`ms-1 p-1 d-flex align-items-center ${styles.info}`}>
                <Image src='/assets/img/icon-clock.svg' alt='Clock' />{useClock()}
              </div>
            </div>
        </div>
      </Card>
    </Link>
  );
};

export default SeriesCard;
