import { CalendarDays, Star, X } from "lucide-react";

const MovieDetailsModal = ({ movie, onClose }) => {
  if (!movie) return null;

  // Remove HTML tags from TVMaze summary
  const overview = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No overview available for this movie.";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-red-500"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Backdrop / Poster */}
        <div className="relative h-64 overflow-hidden sm:h-80">
          <img
            src={movie.image?.original}
            alt={movie.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Movie Information */}
        <div className="space-y-5 p-6 sm:p-8">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {movie.name}
          </h2>

          {/* Rating & Release */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

              <span>
                <strong className="text-gray-900">
                  {movie.rating?.average || "N/A"}
                </strong>{" "}
                Rating
              </span>
            </span>

            <span className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />

              <span>
                Release:{" "}
                <strong className="text-gray-900">
                  {movie.premiered || "N/A"}
                </strong>
              </span>
            </span>
          </div>

          {/* Genre */}
          {movie.genres?.length > 0 && (
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Genre</h3>

              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Network */}
          {movie.network?.name && (
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Network</h3>

              <p className="text-gray-600">{movie.network.name}</p>
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Overview</h3>

            <p className="leading-7 text-gray-600">{overview}</p>
          </div>

          {/* Close */}
          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
