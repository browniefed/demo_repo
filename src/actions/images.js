import { search } from "../api";

export const searchImages = (value, page) => {
  return dispatch => {
    return search(value).then(gifs => {
      const addImageAction = addImages(gifs.data);
      const enhancedActionWithPage = enhanceAddImages(addImageAction, page);

      dispatch(enhancedActionWithPage);
      return gifs.data;
    });
  };
};

export const enhanceAddImages = (imageAction, page) => {
  return {
    ...imageAction,
    page,
  };
};

export const addImages = images => {
  return {
    type: "ADD_IMAGES",
    images,
  };
};

export const addImage = () => {
  return {
    type: "ADD_IMAGE",
  };
};
