import React, { useState } from 'react';
import { Image } from "react-bootstrap";
import styles from "./Trending.module.scss";
import TrendingCard from "../../molecules/TrendingCard/TrendingCard";
import { useTrendingMovie } from "../../../api";

const Trending: React.FC = () => {
    const trendingMovies = useTrendingMovie();
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleMovies = trendingMovies.slice(startIndex, endIndex);

    const handleNextClick = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
        <section className="pt-5 pb-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className={`${styles.section__title}`}>Trending</div>
                <div className={`d-flex align-items-center ${styles.hoverEffect}`} onClick={handleNextClick}>
                    <div className={`${styles.viewAll} me-2`}>View all</div>
                    <Image
                        src="/assets/img/icon-arrow-white.svg"
                        className="m-auto"
                        alt="Next slide"
                    />
                </div>
            </div>
            <div className="mt-4 row justify-content-between">
                {visibleMovies.map((movie, index) => (
                    <div className="col-md-4 mb-2" key={index}>
                        <TrendingCard trendingMovie={movie} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Trending;
