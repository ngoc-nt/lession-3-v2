import React from "react";
import styles from "./MovieCard.module.scss";
import { Card, Image } from "react-bootstrap";
import { getImageUrl, useClock, getRandomQuality } from "../../../utils";
import { Link } from "react-router-dom";

export type TMovieCard = {
    releaseMovie: any;
};

const MovieCard: React.FC<TMovieCard> = ({ releaseMovie }) => {
    return (
        <Link to={`/movie/${releaseMovie && releaseMovie.id}`}>
            <Card
                className={`main-content mt-1 ${
                    releaseMovie && releaseMovie.original_language
                }`}
            >
                <div className="position-relative">
                    <Card.Img
                        variant="top"
                        src={getImageUrl(
                            releaseMovie && releaseMovie.poster_path
                        )}
                        alt={releaseMovie.title}
                    />
                </div>
                <div
                    className={`d-xl-flex justify-content-between align-items-center mt-3 ${styles.content}`}
                >
                    <div className={`${styles.title}`}>
                        {releaseMovie && releaseMovie.title}
                    </div>
                    <div className="d-flex">
                        <div className={`me-2 p-1 ${styles.quality}`}>
                            {getRandomQuality()}
                        </div>
                        <div
                            className={`ms-1 p-1 d-flex align-items-center ${styles.info}`}
                        >
                            <Image
                                src="/assets/img/icon-clock.svg"
                                alt="Clock"
                            />
                            {useClock()}
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default MovieCard;
