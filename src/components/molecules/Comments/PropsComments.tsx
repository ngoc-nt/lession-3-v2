import React, { useState } from 'react';
import styles from '../../../css/CommentCard.module.scss';
import { Image } from 'react-bootstrap';
import { getImageUrl } from '../../../utils';

interface TCommentCard {
  commentData: {
    author: string;
    author_details: {
      avatar_path: string;
    };
    content: string;
    created_at: string;
    updated_at: string;
  }
}

const CommentCard: React.FC<TCommentCard> = ({ commentData }) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const handleToggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  const truncatedContent = commentData.content.slice(0, 100);
  const displayContent = showFullContent ? commentData.content : `${truncatedContent}...`;

  const formatDate = (date: string) => {
    const timestamp = new Date(date);
    const year = timestamp.getFullYear();
    const month = timestamp.getMonth() + 1;
    const day = timestamp.getDate();
    return `${day}/${month}/${year}`;
  };
  return (
    <section className="recommended pt-5 pb-3">
      <div className='row mb-5'>
        <div className='col-2'>
          <Image
            src={getImageUrl(commentData.author_details.avatar_path)}
            className={`${styles.imageAvatar} rounded-circle`}
          />
        </div>
        <div className='col-9 mt-2'>
          <div className='mb-2'>{commentData.author}</div>
          <div className='mb-2'>{formatDate(commentData.created_at)}</div>
          <div className='mb-2'>
            {displayContent}
            {commentData.content.length > 100 && (
              <button className={`${styles.btnComment} ms-3`} onClick={handleToggleContent}>
                {showFullContent ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>
          <div className='mb-2'>
            <Image src='../assets/svg/icon-like.svg' alt='Clock' /> 10
            <Image className='ms-5' src='../assets/svg/icon-dislike.svg' alt='Clock' /> 0
            <span className='ms-5'>Reply</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommentCard;
