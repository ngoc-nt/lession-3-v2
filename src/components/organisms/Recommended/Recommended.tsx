import React, { useState } from "react";
import { Image } from "react-bootstrap";
import MovieCard from "../../molecules/MovieCard/MovieCard";
import styles from "./Recommended.module.scss";
import { useRecommendedMovie, useGenres } from "../../../api";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  genre_ids: number[];
}

const Recommended: React.FC = () => {
  const recommendedMovies = useRecommendedMovie();
  const genres: Genre[] = useGenres();

  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const handleAllClick = () => {
    setSelectedGenre(null);
  };

  const handleGenreClick = (genreId: number | null) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies = selectedGenre
    ? (recommendedMovies as Movie[]).filter((movie) =>
        movie.genre_ids.includes(selectedGenre)
      )
    : recommendedMovies;

  const isGenreSelected = (genreId: number | null) => {
    return genreId === selectedGenre;
  };

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleMovies = filteredMovies.slice(startIndex, endIndex);

  const handleNextClickRecommended = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="recommended pt-5 pb-3">
      <div className="row justify-content-between align-items-md-center">
        <div className="col-md-9 col-7 row">
          <div
            className={`col-md-12 col-lg-3 col-xl-2 me-lg-5 me-xl-5 ${styles.sectionTitle}`}
          >
            Recommended
          </div>
          <div className="col-md-8 col-12 mt-md-0 mt-1 d-flex flex-wrap">
            <div
              className={`ms-4 mb-2 btn d-flex align-items-center ${
                styles.info
              } ${isGenreSelected(null) ? styles.bgColorRed : ""}`}
              onClick={handleAllClick}
            >
              All
            </div>
            {genres && genres.slice(0, 3).map((genre) => (
              <div
                key={genre.id}
                className={`ms-4 mb-2 btn d-flex align-items-center ${
                  styles.info
                } ${isGenreSelected(genre.id) ? styles.bgColorRed : ""}`}
                onClick={() => handleGenreClick(genre.id)}
              >
                {genre.name}
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-3 col-5" onClick={handleNextClickRecommended}>
          <div className="float-end">
            <div className={`${styles.viewAll} me-2`}>
              View all{" "}
              <Image
                src="/assets/img/icon-arrow-white.svg"
                className="m-auto"
                alt="Next slide"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 row">
        {visibleMovies.map((movie, index) => (
          <div className="col-md-6 col-lg-3 mb-2" key={index}>
            <MovieCard releaseMovie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommended;
