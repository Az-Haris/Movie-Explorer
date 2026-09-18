import { useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, loading, setLoading, error, setError }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
