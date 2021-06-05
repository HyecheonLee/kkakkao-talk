import {CLEAR_USER, IS_LOADING, SET_USER, UPDATE_PHOTO_URL} from "../actions/types";

const initialUserState = {
  currentUser: null,
  isLoading: true
}
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false
      }
    case UPDATE_PHOTO_URL:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          photoURL: action.payload
        },
        isLoading: false
      }
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case CLEAR_USER:
      return {
        ...state,
        currentUser: null,
        isLoading: false
      }
    default:
      return state;
  }
}
export default userReducer;