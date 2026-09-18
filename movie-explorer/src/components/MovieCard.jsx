import { CalendarDays, Star } from "lucide-react";

export const MovieCard = ({ movie, onDetails }) => {
  const { name, image, rating, premiered } = movie;

  const year = premiered ? new Date(premiered).getFullYear() : "N/A";

  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="aspect-2/3 overflow-hidden">
        <img
          src={image?.original}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-4">
        <h3 className="truncate text-lg font-semibold" title={name}>
          {name}
        </h3>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {rating?.average || "N/A"}
          </span>

          <span className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            {year}
          </span>
        </div>

        <button
          onClick={() => onDetails(movie)}
          className="block w-full rounded-md bg-black px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-red-500"
        >
          See Details
        </button>
      </div>
    </article>
  );
};
