import React from "react";
import { Image } from "react-bootstrap";
import styles from '../../../css/VideoChapter.module.scss';

interface VideoChapterProps {
  seasonData: {
    id: string;
    key: string;
    name: string;
  };
  index: number;
  onSelect: () => void;
  isSelected: boolean;
}

const VideoChapterCard: React.FC<VideoChapterProps> = ({ seasonData, index, onSelect, isSelected }) => {
  return (
    <div
      className={`d-flex align-items-center ${styles.blockEpisode} ${isSelected ? styles.selected : styles.notSelected}`}
      onClick={onSelect}
    >
      <Image className={`ms-3 ${styles.iconPlay}`} src='../../../assets/svg/icon-play-season.svg' alt='play' />
      <div className={`ms-3 ${styles.textEpisode} ${isSelected ? styles.selected : styles.notSelected}`}>
        Episode {index + 1}: {seasonData.name}
      </div>
    </div>
  );
}

export default VideoChapterCard;
