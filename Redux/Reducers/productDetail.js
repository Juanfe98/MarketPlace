import {SET_MODAL_VISIBILITY} from '../Constants';

const productDetail = (state = {visibility: false}, action) => {
  switch (action.type) {
    case SET_MODAL_VISIBILITY:
      return {
        visibility: !state.visibility,
      };
    default:
      return state;
  }
  return state;
};

export default productDetail;
