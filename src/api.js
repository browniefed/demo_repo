const API_KEY = "d2da05e5823d4073aa18f6715ca015f8";
const URL = "https://api.giphy.com/v1/gifs";

export const search = searchTerm => {
  return fetch(
    `${URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=25&offset=0&rating=PG-13&lang=en`,
  ).then(res => res.json());
};

export const getRandom = () => {
  return fetch(`${URL}/random?api_key=${API_KEY}&tag=&rating=PG-13`).then(res => res.json());
};

export const getTrending = () => {
  return fetch(`${URL}/trending?api_key=${API_KEY}&limit=25&rating=PG-13`).then(res => res.json());
};

export const getImage = id => {
  console.log(`${URL}/${id}?api_key=${API_KEY}`);
  
  return fetch(`${URL}/${id}?api_key=${API_KEY}`).then(res => res.json());
};
