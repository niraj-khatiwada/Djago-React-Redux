import axios from 'axios'

const axiosDefaults = {
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_DEVELOPMENT_URL
      : process.env.REACT_APP_PRODUCTION_URL,
}

export const axiosFetchStart = () => {
  return {
    type: 'AXIOS_FETCH_START',
  }
}

export const axiosFetchSuccess = (data) => {
  return {
    type: 'AXIOS_FETCH_SUCCESSFUL',
    payload: data,
  }
}

export const axiosFetchError = (error) => {
  return {
    type: 'AXIOS_FETCH_ERROR',
    payload: error,
  }
}

export const axiosFetchStartAsync = () => async (dispatch) => {
  dispatch(axiosFetchStart())
  await axios({
    url: axiosDefaults.baseURL + 'api/',
  })
    .then((res) => dispatch(axiosFetchSuccess(res.data)))
    .catch((error) => dispatch(axiosFetchError(error.response)))
}
