import React, { useEffect, useState } from 'react';
import styles from '../../../css/Comment.module.scss';
import CommentCard from './PropsComments';
import { Image } from 'react-bootstrap';
import { API_KEY } from '../../../constants';

interface commentMoviesProps {
  movieId: string | undefined;
}

const Comment: React.FC<commentMoviesProps> = ({ movieId }) => {
  const [comments, setComments] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentMoviesData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
        const commentMoviesJson = await commentMoviesData.json();
        setComments(commentMoviesJson.results);
      } catch (error) {
        console.error('Error fetching data comment:', error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <section className='series pt-5 pb-3'>
      <div className={`${styles.sectionTitle} mb-5`}>Comment</div>
      <div className='mb-4 mb-md-2'>
        <div className='row mb-5'>
          <div className='col-2'>
            <Image
              src='/assets/img/avatar.png' alt='Clock'
              className={`${styles.imageAvatar} rounded-circle`}
            />
          </div>
          <div className='col-9 mt-0 mt-md-2'>
            <div className='mb-2'>Nguyễn Tuấn Ngọc (No Name)</div>
            <div className='mb-2'>
              <input className={`${styles.inputComment} w-100 ps-3`} placeholder='Write your comments here.....' />
            </div>

          </div>
        </div>
      </div>
      {Array.isArray(comments) && comments.map((comment, index) => (
        <div className='mb-4 mb-md-2' key={index}>
          <CommentCard commentData={comment} />
        </div>
      ))}
    </section>
  );
}

export default Comment;
