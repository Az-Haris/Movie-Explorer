

export const getMovies = async () => {
    const url = "https://api.tvmaze.com/shows";

    const result = await fetch(url);

    if (!result) {
        throw new Error("Movies request failed!");
    }

    const data = await result.json();

    if (!data) {
        throw new Error("Invalid movie data. Try again later.")
    }

    return data;
}