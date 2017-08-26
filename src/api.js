const API_KEY = "d2da05e5823d4073aa18f6715ca015f8";
const URL = "https://api.giphy.com/v1/gifs";

export const search = searchTerm => {
  return fetch(
    `${URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=25&offset=0&rating=PG-13&lang=en`,
  ).then(res => res.json());
};
