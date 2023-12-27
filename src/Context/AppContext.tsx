// AppContext.tsx
import{ createContext, ReactNode, useState, useEffect } from 'react';
import { fetchDataFromApi } from '../utils';

export const AppContext = createContext([]);
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genresData = await fetchDataFromApi('genre/movie/list');
      if (genresData) {
        setGenres(genresData.genres);
      }
    };

    fetchGenres();
  }, []);

  return <AppContext.Provider value={genres}>
       {children}
    </AppContext.Provider>;
};