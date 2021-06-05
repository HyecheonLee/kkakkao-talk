import {CLEAR_USER, IS_LOADING, SET_USER, UPDATE_PHOTO_URL} from "./types";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}
export const isLoading = () => {
  return {
    type: IS_LOADING
  }
}
export const updatePhotoUrl = (url) => {
  return {
    type: UPDATE_PHOTO_URL,
    payload: url
  }
}
export const clearUser = () => {
  return {
    type: CLEAR_USER
  }
}