import React from "react";
import styles from "./Movie.module.scss";
import { Image } from "react-bootstrap";
import MovieCard from "../../molecules/MovieCard/MovieCard";
import { useReleaseMovie } from "../../../api";
import { MovieItemLoading } from "../../loading/MovieItemLoading";

const Movie: React.FC = () => {
    const releaseMovies = useReleaseMovie();

    return (
        <section className="pt-5 pb-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className={`${styles.section__title}`}>
                    New Release - Movies
                </div>
                <div className={`d-flex align-items-center`}>
                    <div className={`${styles.viewAll} me-2`}>View all</div>
                    <Image
                        src="/assets/img/icon-arrow-white.svg"
                        className="m-auto"
                        alt="Next slide"
                    />
                </div>
            </div>

            <div className="mt-4 row justify-content-between">
                {Array(4)
                    .fill(null)
                    .map((_, index) => (
                        <div className="col-md-6 col-lg-3 mb-2" key={index}>
                            {!releaseMovies ? (
                                <MovieCard releaseMovie={releaseMovies} />
                            ) : (
                                <MovieItemLoading></MovieItemLoading>
                            )}
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Movie;
