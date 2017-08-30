
const imageReducer = (state = [], action) => {

  switch(action.type) {
    case "ADD_IMAGES": 
      return action.images;
    case "ADD_IMAGE": 
      return state;
    default:
      return state;
  }

}

export default imageReducer;