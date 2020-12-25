import {
  ITEM_ADD_ITEM_REQUEST,
  ITEM_ADD_ITEM_SUCCESS,
  ITEM_ADD_ITEM_FAIL,
  ITEM_ADD_ITEM_RESET,
} from '../constants/itemConstants';

export function addItemReducer(state = {}, action) {
  
  switch (action.type) {
    case ITEM_ADD_ITEM_REQUEST:
      return { loading: true };

    case ITEM_ADD_ITEM_SUCCESS:
      return { loading: false };

    case ITEM_ADD_ITEM_FAIL:
      return { loading: false, error: action.payload };
    
    case ITEM_ADD_ITEM_RESET:
      return {};
   
    default:
      return state;
  }

}

