import { Link } from "react-router";
import bannerImage from "../../assets/banner-image.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-96 sm:min-h-125 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex min-h-96 sm:min-h-125 items-center justify-center px-4 text-center text-white">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Movie Explorer
          </p>

          <h1 className="mb-5 text-4xl font-bold sm:text-5xl md:text-6xl">
            Discover Your Next Favorite Movie
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base text-gray-300 sm:text-lg">
            Explore popular movies, discover new stories, and find something
            great to watch anytime.
          </p>

          <Link
            to="/movies"
            className="inline-block rounded-md bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            Explore Movies
          </Link>
        </div>
      </div>
    </section>
  );
};
