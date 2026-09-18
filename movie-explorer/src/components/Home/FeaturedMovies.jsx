import { useState } from "react";
import { Link } from "react-router";
import { MovieCard } from "../MovieCard";
import MovieDetailsModal from "../MovieDetailsModal";
import { use } from "react";
import { MoviesContext } from "../../providers/movies.provider";

// const featuredMovies = [
//   {
//     id: 1,
//     title: "Inception",
//     poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
//     backdrop:
//       "https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
//     rating: 8.8,
//     year: 2010,
//     releaseDate: "2010-07-16",
//     genre: ["Action", "Sci-Fi", "Thriller"],
//     director: "Christopher Nolan",
//     overview:
//       "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
//   },
//   {
//     id: 2,
//     title: "Interstellar",
//     poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
//     backdrop:
//       "https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5l4zXRA.jpg",
//     rating: 8.7,
//     year: 2014,
//     releaseDate: "2014-11-07",
//     genre: ["Adventure", "Drama", "Sci-Fi"],
//     director: "Christopher Nolan",
//     overview:
//       "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//   },
//   {
//     id: 3,
//     title: "The Dark Knight",
//     poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//     backdrop:
//       "https://image.tmdb.org/t/p/w1280/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
//     rating: 9.0,
//     year: 2008,
//     releaseDate: "2008-07-18",
//     genre: ["Action", "Crime", "Drama"],
//     director: "Christopher Nolan",
//     overview:
//       "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
//   },
//   {
//     id: 4,
//     title: "Avengers: Endgame",
//     poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
//     backdrop:
//       "https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
//     rating: 8.4,
//     year: 2019,
//     releaseDate: "2019-04-26",
//     genre: ["Adventure", "Drama", "Sci-Fi"],
//     director: "Anthony Russo, Joe Russo",
//     overview:
//       "After the devastating events of Avengers: Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
//   },
// ];

const FeaturedMovies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movies } = use(MoviesContext);
  const featuredMovies = movies.slice(0, 4);
  console.log(featuredMovies);

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-500">
              Featured
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Movies
            </h2>

            <p className="mt-3 max-w-xl text-gray-600">
              Discover some of the most popular and highly rated movies worth
              watching.
            </p>
          </div>

          <Link
            to="/movies"
            className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-500"
          >
            View All Movies
          </Link>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDetails={setSelectedMovie}
            />
          ))}
        </div>
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </section>
  );
};

export default FeaturedMovies;
