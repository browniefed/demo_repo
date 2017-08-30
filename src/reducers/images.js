
const convertImagesToObject = (images) => {
  let objImages = {};
  images.forEach((image) => {
    objImages[image.id] = image;
  });

  return objImages;
}


const imageReducer = (state = {}, action) => {

  switch(action.type) {
    case "ADD_IMAGES": 
      return {
        ...state,
        ...convertImagesToObject(action.images),
      }
    case "ADD_IMAGE": 
      return state;
    default:
      return state;
  }

}

export default imageReducer;