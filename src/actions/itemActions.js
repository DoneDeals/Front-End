import axios from 'axios'
import {
  ITEM_ADD_ITEM_REQUEST,
  ITEM_ADD_ITEM_SUCCESS,
  ITEM_ADD_ITEM_FAIL
} from '../constants/itemConstants'


export function addItem(category, description, unitPrice) {

  return async function (dispatch) {
    try {

      dispatch({type: ITEM_ADD_ITEM_REQUEST,});

      const config = {
        headers: {'Content-Type': 'application/json',},
      };

      const { data } = await axios.post(
        '/api/items',
        { category, description, unitPrice },
        config
      );

      dispatch({type: ITEM_ADD_ITEM_SUCCESS,});

      //Do not remove this code yet, 
      //it will most likely be linked to table when add is successfull
      // dispatch({
      //   type: USER_LOGIN_SUCCESS,
      //   payload: data,
      // })

      // dispatch({
      //   type: USER_REGISTER_RESET,
      // })

      localStorage.setItem('userAuth', JSON.stringify(data));
    
    } catch (error) {
      dispatch({type:   ITEM_ADD_ITEM_FAIL, payload: error.response.data.message});
    }
  }

}

//-------------------------------

// export function getItemDetails(userAuth) {
export function getItemDetails(){
  
  return async function (dispatch) {
    try {
      dispatch({type: ITEM_GET_ITEM_DETAILS_REQUEST,});

      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${userAuth.token}`,
      //   },
      // };

      // const { data } = await axios.get('/api/users/profile', config); //SJ5010121 - the endpoint need to change /api/items
      const { data } = await axios.get('/api/items', config);

      dispatch({type: ITEM_GET_ITEM_DETAILS_SUCCESS, payload: data});
    
    } catch (error) {
      const message = error.response.data.message
      // if (message === 'Not authorized, token failed') {
      //   dispatch(logout())
      // }
      dispatch({type: ITEM_GET_ITEM_DETAILS_FAIL, payload: message});
    }
  }
}

//------------------------

