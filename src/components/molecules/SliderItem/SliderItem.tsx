import React from "react";
import { Badge, Carousel, Image } from "react-bootstrap";
import styles from "./SliderItem.module.scss";
import { getYearFromDate, getImageUrl } from "../../../api";

interface SliderItemProps {
    genresList: any;
    movieData: any;
}

interface Genre {
    id: number;
    name: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ genresList, movieData }) => {
    const genres: Genre[] = genresList;

    return (
        <>
            <Image
                src={getImageUrl(movieData && movieData.poster_path)}
                className={`w-100 ${styles.imagePoster}`}
                alt={movieData.title}
            />
            <Carousel.Caption
                className={`mb-lg-3 ${styles.mainCarousel} d-sm-none d-md-block`}
            >
                <div className={`${styles.title}`}>{movieData.title}</div>
                <div className={`mt-3 d-flex ${styles.wrapBadge}`}>
                    {movieData.genre_ids &&
                        movieData.genre_ids.map((movieGenreId: number) => {
                            const matchingGenre = genres.find(
                                (genre) => genre.id === movieGenreId
                            );
                            return matchingGenre ? (
                                <Badge
                                    key={matchingGenre.id}
                                    bg="light"
                                    text="dark"
                                    className={`${styles.badge} me-2 p-2`}
                                >
                                    {matchingGenre.name}
                                </Badge>
                            ) : null;
                        })}
                    <div className="d-flex align-items-center me-2 ms-3">
                        <Image
                            src="/assets/img/icon-calendar.svg"
                            alt="Clock"
                        />
                        <div className="ms-2">
                            {getYearFromDate(movieData.release_date)}
                        </div>
                    </div>
                    <div className="d-flex align-items-center me-2 ms-3">
                        <Image src="/assets/img/icon-clock.svg" alt="Clock" />
                        <div className="ms-2">3:12:00</div>
                    </div>
                    <div className="d-flex align-items-center me-2 ms-3">
                        <Image src="/assets/img/icon-star.svg" alt="Clock" />
                        <div className="ms-2">{movieData.vote_average}</div>
                    </div>
                </div>
                <div className={`${styles.description} mt-3 mb-5`}>
                    {movieData.overview}
                </div>
            </Carousel.Caption>
        </>
    );
};

export default SliderItem;
