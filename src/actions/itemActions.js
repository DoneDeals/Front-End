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
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        '/api/items',
        { category, description, unitPrice },
        config
      )

      dispatch({type: ITEM_ADD_ITEM_SUCCESS,});

      //This will most likely be linked to table when add is successfull
      // dispatch({
      //   type: USER_LOGIN_SUCCESS,
      //   payload: data,
      // })

      // dispatch({
      //   type: USER_REGISTER_RESET,
      // })

      localStorage.setItem('userAuth', JSON.stringify(data)); //work on this userAuth
    
    } catch (error) {
      dispatch({type:   ITEM_ADD_ITEM_FAIL, payload: error.response.data.message,
    });
    }
  }

}

