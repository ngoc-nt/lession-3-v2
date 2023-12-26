import React from "react";
import { Image } from "react-bootstrap";
import SeriesCard from "../../molecules/SeriesCard/SeriesCard";
import styles from "./Series.module.scss";
import { useReleaseMovie } from "../../../api";

const Series: React.FC = () => {
    const releaseMovies = useReleaseMovie();

    return (
        <section className="series pt-5 pb-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className={`${styles.sectionTitle}`}>
                    New Release - Series
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
            {Array(4).fill(null).map((_, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-3">
                <SeriesCard releaseMovie={releaseMovies} />
                </div>
            ))}
            </div>
        </section>
    );
};

export default Series;
