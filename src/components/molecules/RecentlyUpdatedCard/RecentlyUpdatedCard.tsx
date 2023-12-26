import React from 'react';
import styles from './RecentlyUpdatedCard.module.scss';
import { Image } from 'react-bootstrap';
import { getYearFromDate, getImageUrl } from '../../../api';

interface TrecentlyUpdatedCard {
  recentlyMovie: any;
}


const RecentlyUpdatedCard: React.FC<TrecentlyUpdatedCard> =({recentlyMovie}) => {
  return (
    <div className={`d-flex justify-content-start ${styles.card}`}>
    <Image src={getImageUrl(recentlyMovie && recentlyMovie.poster_path)} alt={recentlyMovie.title} />
    <div className={`ms-3 ms-lg-1 ms-xl-3 ${styles.info}`}>
      <div>{recentlyMovie.title}</div>
      <div>
        <p className={styles.text_title}></p>
        {getYearFromDate(recentlyMovie.release_date)}
      </div>
    </div>
  </div>
  );
};

export default RecentlyUpdatedCard;
