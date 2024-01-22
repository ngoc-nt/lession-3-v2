import React, { useEffect, useState } from 'react';
import { Card, Image, Badge } from 'react-bootstrap';
import styles from '../../../css/VideoDetail.module.scss';
import { getImageUrl } from '../../../utils';
import {API_KEY, MONTH_YEAR} from '../../../constants';

interface MovieDetailProps {
  movieId: string | undefined;
}

interface MovieDetailState {
  id: number;
  title: string;
  genres: { id: number, name: string }[];
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  production_companies: { name: string }[],
  production_countries: { name: string }[]
}

const Description: React.FC<MovieDetailProps> = ({ movieId }) => {
  const [description, setDescription] = useState<MovieDetailState>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
        const descriptionMovie = await response.json();
        setDescription(descriptionMovie);
      } catch (error) {
        console.error('Error fetching data description:', error);
      }
    };

    fetchData();
  }, [movieId]);
  
  const companyNames = description?.production_companies?.map(company => company.name).join(', ') || [];
  const countryNames = description?.production_countries?.map(country => country.name).join(', ') || [];
  const genreNames = description?.genres?.map(genre => genre.name).join(', ') || [];

  const FormatDate = (dateString: string) => {
    const dateObject = new Date(dateString);
    return `${MONTH_YEAR[dateObject.getMonth()]} ${dateObject.getDate()} ${dateObject.getFullYear()}`;
  };

  const getYearFromDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (
    <section className='description pt-5 pb-1'>
      {description &&
        <div className='d-lg-flex justify-content-between'>
          <Card.Img
            variant='top'
            src={getImageUrl(description.poster_path)}
            className={styles.imagePoster}
          />
          <div className='w-100 ms-0 ms-lg-5 mt-3 mt-lg-0'>
            <div className='d-xl-flex justify-content-between align-items-center mb-3'>
              <div className={`${styles.title} w-100`}>{description.title}</div>
              <div className='d-flex'>
                <div className={`p-3 d-flex justify-content-center align-items-center ${styles.btnFavourite}`}>
                  <Image src='/assets/svg/add.svg' alt='Add' />
                  <div className={`ms-1 ${styles.text}`}>Add to Favourite</div>
                </div>
              </div>
            </div>
            <div className='mt-1 mt-lg-4'>
              <div className='mt-3 d-lg-flex align-items-center'>
                {description.genres && description.genres.map((movieGenre: { id: number, name: string }) => (
                  <Badge
                    key={movieGenre.id}
                    bg='light'
                    text='dark'
                    className={`${styles.badge} me-2`}
                  >
                    {movieGenre.name}
                  </Badge>
                ))}
                <div className='d-flex align-items-center flex-wrap mt-2 mt-lg-0'>
                  <div className='d-flex align-items-center me-2 ms-0 m-lg-3'>
                    <Image src='/assets/img/icon-calendar.svg' alt='Clock' />
                    <div className='ms-2 text-sm'>
                      {getYearFromDate(description.release_date)}
                    </div>
                  </div>
                  <div className='d-flex align-items-center me-2 ms-3'>
                    <Image src='/assets/img/icon-clock.svg' alt='Clock' />
                    <div className='ms-2 text-sm'>3:12:00</div>
                  </div>
                  <div className='d-flex align-items-center me-2 ms-3'>
                    <Image src='/assets/img/icon-star.svg' alt='Clock' />
                    <div className='ms-2 text-sm'>{description.vote_average}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`mt-3 mt-lg-4 ${styles.overview}`}>
              {description.overview}
            </div>
            <div className='mt-3 mt-lg-5'>
              <div className='row mt-2'>
                <span className={`col-4 col-md-3 ${styles.decription}`}>Country : </span>
                <span className='col-8 col-md-9'>{countryNames}</span>
              </div>
              <div className='row mt-2'>
                <span className={`col-4 col-md-3 ${styles.decription}`}>Genre : </span>
                <span className='col-8 col-md-9'>{genreNames}</span>
              </div>
              <div className='row mt-2'>
                <span className={`col-4 col-md-3 ${styles.decription}`}>Date Release : </span>
                <span className='col-8 col-md-9'>{FormatDate(description.release_date)}</span>
              </div>
              <div className='row mt-2'>
                <span className={`col-4 col-md-3 ${styles.decription}`}>Production : </span>
                <span className='col-8 col-md-9'>{companyNames}</span>
              </div>
              <div className='row mt-2'>
                <span className={`col-4 col-md-3 ${styles.decription}`}>Cast : </span>
                <span className='col-8 col-md-9'>
                  Tim Robbins, Rebecca Ferguson, Avi Nash,
                </span>
              </div>
              <div className='row mt-2'>
                <span className={`col-4 col-md-3 ${styles.decription}`}></span>
                <span className='col-8 col-md-9'>
                  Rashida Jones, David Oyewolo, Tim Robbins
                </span>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  );
};

export default Description;
