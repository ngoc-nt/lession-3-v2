const { useEffect, useState } = require('react');
const {
  fetchDataFromApi,
  getYearFromDate,
  getImageUrl,
  getRandomQuality,
} = require('./utils');

const useMovieHook = (endpoint, extractData = true) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchDataFromApi(endpoint);
      if (moviesData) {
        setMovies(extractData ? moviesData.results : moviesData);
      }
    };

    fetchData();
  }, [endpoint, extractData]);

  return movies;
};

const useSliderMovie = () => useMovieHook('movie/now_playing');
const useRecentlyMovie = () => useMovieHook('movie/upcoming');
const useTrendingMovie = () => useMovieHook('trending/movie/week');
const useReleaseMovie = () => useMovieHook('movie/latest', false);
const useRecommendedMovie = () => useMovieHook('movie/top_rated');

module.exports = {
  useSliderMovie,
  useRecentlyMovie,
  useTrendingMovie,
  useReleaseMovie,
  useRecommendedMovie,
  getYearFromDate,
  getImageUrl,
  getRandomQuality,
};
