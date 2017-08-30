
const INITIAL_STATE = {}

const getImageIds = (images) => {
  return images.map(
      ({ id }) => id
  );
}
const pageReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case "ADD_IMAGES": 
      if (!action.page) return state;
      return {
        ...state,
        [action.page]: getImageIds(action.images)
      }
    case "CLEAR_IMAGE": 
      delete state[action.page];
      return state;
    default:
      return state;
  }
}

export default pageReducer;