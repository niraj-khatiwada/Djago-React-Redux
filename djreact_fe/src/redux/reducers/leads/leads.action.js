import axios from 'axios'

import { httpType, axiosFetch } from '../utils/reducers.utils'

const axiosDefaults = {
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_DEVELOPMENT_URL
      : process.env.REACT_APP_PRODUCTION_URL,
}

const axiosFetchStart = (http) => {
  switch (http) {
    case httpType.LIST:
      return {
        type: axiosFetch.LIST.START,
      }
    case httpType.DELETE:
      return {
        type: axiosFetch.DELETE.START,
      }
  }
}

const axiosFetchSuccess = (http, data) => {
  switch (http) {
    case httpType.LIST:
      return {
        type: axiosFetch.LIST.SUCCESS,
        payload: data,
      }
    case httpType.DELETE:
      return {
        type: axiosFetch.DELETE.SUCCESS,
        payload: data,
      }
  }
}

const axiosFetchError = (httpType, error) => {
  switch (httpType) {
    case 'LIST':
      return {
        type: axiosFetch.LIST.ERROR,
        payload: error,
      }
    case 'DELETE':
      return {
        type: axiosFetch.DELETE.ERROR,
        payload: error,
      }
  }
}

// LIST
export const axiosFetchListAsync = () => async (dispatch) => {
  dispatch(axiosFetchStart(httpType.LIST))
  await axios({
    url: axiosDefaults.baseURL + 'api/',
  })
    .then((res) => dispatch(axiosFetchSuccess(httpType.LIST, res.data)))
    .catch((error) => dispatch(axiosFetchError(httpType.LIST, error.response)))
}

// DELETE
export const axiosFetchDeleteAsync = (pk) => async (dispatch) => {
  dispatch(axiosFetchStart(httpType.DELETE))
  axios({
    method: 'delete',
    url: axiosDefaults.baseURL + `api/${pk}/`,
  })
    .then((res) => {
      dispatch(axiosFetchSuccess(httpType.DELETE, res.data))
      dispatch(axiosFetchListAsync(httpType.LIST))
    })
    .catch((error) =>
      dispatch(axiosFetchError(httpType.DELETE, error.response))
    )
}
