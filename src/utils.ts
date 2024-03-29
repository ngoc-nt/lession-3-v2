// utils.ts
import { BASE_API_URL, API_KEY, HOURS_IN_MINUTES, PATH_IMG_API_URL, DEFAULT_IMAGE_NAME, PATH_VIDEO_URL  } from './constants';

export const fetchDataFromApi = async <T>(endpoint: T) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${endpoint}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const getYearFromDate = (dateString: Date) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

export const convertToHoursAndMinutes = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / HOURS_IN_MINUTES);
  const minutes = Math.round(totalMinutes % HOURS_IN_MINUTES);

  return `${hours}h ${minutes}m`;
};

export const roundToTwoDecimalPlaces = (number: any) => {
  return Number(number).toFixed(2);
};

export const getImageUrl = (imageUrl : string) => {
  return imageUrl ? `${PATH_IMG_API_URL}/${imageUrl}` : `/assets/img/${DEFAULT_IMAGE_NAME}`;
};

export const useClock = (): string => {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { hour12: false });
};

export const getRandomQuality = () => {
  const qualities = ['HD', '4K'];
  const randomIndex = Math.floor(Math.random() * qualities.length);
  return qualities[randomIndex];
};

export const FormatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
};

export const getMovieDetails = async (movieId: string | undefined) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`);

    if (response.status === 404) {
      console.error('Movie not found');
      return null;
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details. Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.results && Array.isArray(data.results)) {
      return {
        id: movieId,
        video: data.results.slice(0, 6),
      };
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const getVidelUrl = (videoUrl : string | null) => {
  return videoUrl ? `${PATH_VIDEO_URL}${videoUrl}` : `https://www.youtube.com/embed/NQ6_Sqt_w3Y?si=TG5Ww3_S7hNdtNUY`;
};
