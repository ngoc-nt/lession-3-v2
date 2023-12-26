import React, { useState, useEffect } from "react";
import styles from "./TrendingCard.module.scss";
import { Badge, Card, Image } from "react-bootstrap";
import { API_KEY, BASE_API_URL } from "../../../constants";
import { convertToHoursAndMinutes, roundToTwoDecimalPlaces, getImageUrl} from "../../../utils";

type TTrendingCard = {
    trendingMovie: any;
};

const TrendingCard: React.FC<TTrendingCard> = ({ trendingMovie }) => {
    const [genres, setGenres] = useState<any[]>([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch(
                    `${BASE_API_URL}/genre/movie/list?api_key=${API_KEY}`
                );
                const data = await response.json();
                setGenres(data.genres);
            } catch (error) {
                console.error("Error fetching genres:", error);
            }
        };

        fetchGenres();
    }, []);

    return (
        <Card className="main-content">
            <div className="position-relative">
                <Card.Img
                    variant="top"
                    src={getImageUrl(trendingMovie && trendingMovie.poster_path)}
                />
               {trendingMovie.video && (
                <Image
                    src="/assets/img/btn-play.svg"
                    className="position-absolute top-0 bottom-0 start-0 end-0 m-auto"
                    alt="Button Play"
                  />
                )}
                {trendingMovie.popularity && (
                    <div
                        className={`position-absolute d-flex align-items-center ${styles.time}`}
                    >
                        <Image src="/assets/img/icon-clock.svg" alt="Clock" />
                        <div className="ms-1">{convertToHoursAndMinutes(trendingMovie.popularity)}</div>
                    </div>
                )}
                {trendingMovie.vote_average && (
                    <div
                        className={`position-absolute d-flex align-items-center ${styles.rate}`}
                    >
                        <Image src="/assets/img/icon-star.svg" alt="Star" />
                        <div className="ms-1">{roundToTwoDecimalPlaces(trendingMovie.vote_average)}</div>
                    </div>
                )}
            </div>
            <div
                className={`d-xl-flex justify-content-between align-items-center mt-3 ${styles.content}`}
            >
                <div className={`${styles.title}`}>{trendingMovie.title}</div>

                {trendingMovie.genre_ids &&
                    trendingMovie.genre_ids.map((movieGenreId: number) => {
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
            </div>
        </Card>
    );
};

export default TrendingCard;
