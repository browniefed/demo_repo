import { search } from "../api";

export const searchImages = (value) => {
  return (dispatch) => {
    return search(value).then(gifs => {
      dispatch(addImages(gifs.data));
    });
  }
}

export const addImages = (images) => {
  return {
    type: "ADD_IMAGES",
    images
  }
}

export const addImage = () => {
  return {
    type: "ADD_IMAGE"
  }
}