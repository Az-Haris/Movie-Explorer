import { useEffect } from "react";
import FeaturedMovies from "./components/Home/FeaturedMovies";
import { HeroSection } from "./components/Home/HeroSection";
import { getMovies } from "./services/get-movies";
import { use } from "react";
import { MoviesContext } from "./providers/movies.provider";

function App() {
  const { setMovies, movies, setLoading, setError } = use(MoviesContext);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const data = await getMovies();

        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [setError, setLoading, setMovies]);

  console.log(movies);
  return (
    <>
      <HeroSection />
      <FeaturedMovies />
    </>
  );
}

export default App;
