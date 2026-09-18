import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="h-screen text-center flex flex-col justify-center items-center gap-3">
      <h1 className="text-6xl font-black">404</h1>
      <h2 className="text-3xl font-bold">Page Not Found</h2>
      <p className="text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      >
        Go Back Home
      </Link>
    </div>
  );
}
