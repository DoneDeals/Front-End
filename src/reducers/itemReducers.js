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

//----------------------

// USER_DETAILS_REQUEST,   ITEM_GET_ITEM_DETAILS_REQUEST
// USER_DETAILS_SUCCESS,  ITEM_GET_ITEM_DETAILS_SUCCESS
// USER_DETAILS_FAIL,   ITEM_GET_ITEM_DETAILS_FAIL

export function itemGetDetailsReducer(state = {}, action) {
  
  switch (action.type) {
    case ITEM_GET_ITEM_DETAILS_REQUEST:
      return { ...state, loading: true };

    case ITEM_GET_ITEM_DETAILS_SUCCESS:
      return { loading: false, itemDetail: action.payload };

    case ITEM_GET_ITEM_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    // case USER_DETAILS_RESET:
    //   return { item: {} };

    default:
      return state;
  }

}

//-------------------

