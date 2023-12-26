import React, { useState } from 'react';
import styles from "./RecentlyUpdated.module.scss";
import RecentlyUpdatedCard from "../../molecules/RecentlyUpdatedCard/RecentlyUpdatedCard";
import { useRecentlyMovie } from "../../../api";

const RecentlyUpdated: React.FC = () => {
    const recentlyMovies = useRecentlyMovie();

    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleMovies = recentlyMovies.slice(startIndex, endIndex);

    const handleNextClickRecently = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
        <section className="pt-5 pb-3">
            <div className={`${styles.section__title}`}>Recently Updated</div>
            <div className="mt-4 row justify-content-between">
                <div className="row col-10 col-md-10">
                    {visibleMovies && visibleMovies.map((movie, index) => (
                        <div className="col-md-6 col-lg-3 mb-2" key={index}>
                            <RecentlyUpdatedCard recentlyMovie={movie} />
                        </div>
                    ))}
                </div>
                <div className="col-2 col-md-2 col-lg-2 mb-2">
                    <div className={`d-flex float-md-end m-auto ${styles.nextSlide}`} onClick={handleNextClickRecently}>
                        <img
                            src="/assets/img/icon-arrow.svg"
                            className="m-auto"
                            alt="Next slide"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentlyUpdated;
