import { use, useEffect, useState } from "react";
import { Search } from "lucide-react";

import { MovieCard } from "../components/MovieCard";
import MovieDetailsModal from "../components/MovieDetailsModal";
import { MoviesContext } from "../providers/movies.provider";

const Movies = () => {
  const { movies, loading, error } = use(MoviesContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const moviesPerPage = 10;

  // Search by movie title
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Pagination
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const startIndex = (currentPage - 1) * moviesPerPage;

  const currentMovies = filteredMovies.slice(
    startIndex,
    startIndex + moviesPerPage,
  );

  // Reset page when search changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);

    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  }, [searchQuery]);

  // Scroll when page changes
  useEffect(() => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Movies
          </h1>

          <p className="mt-3 text-gray-600">
            Search and discover your favorite movies.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-10 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies by title..."
              className="w-full rounded-lg border border-gray-300 bg-white py-3.5 pl-12 pr-4 text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            />
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-16 text-center">
            <p className="text-gray-500">Loading movies...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-lg bg-white py-16 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-red-500">
              Something went wrong
            </h2>

            <p className="mt-2 text-gray-500">{error}</p>
          </div>
        )}

        {/* Movie Content */}
        {!loading && !error && (
          <>
            {/* Result Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-500">
                {filteredMovies.length} movie
                {filteredMovies.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {/* Movie Grid */}
            {currentMovies.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                {currentMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onDetails={setSelectedMovie}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-lg bg-white py-16 text-center shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">
                  No movies found
                </h2>

                <p className="mt-2 text-gray-500">
                  Try searching with a different movie title.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  {/* Previous */}
                  <button
                    onClick={() => setCurrentPage((page) => page - 1)}
                    disabled={currentPage === 1}
                    className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`h-10 w-10 rounded-md text-sm font-medium ${
                        currentPage === index + 1
                          ? "bg-red-500 text-white"
                          : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  {/* Next */}
                  <button
                    onClick={() => setCurrentPage((page) => page + 1)}
                    disabled={currentPage === totalPages}
                    className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </main>
  );
};

export default Movies;
