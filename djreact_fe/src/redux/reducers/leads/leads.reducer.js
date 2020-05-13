const INITIAL_STATE = { isFetching: false, data: null, error: undefined }

export const leadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AXIOS_FETCH_START':
      return { ...state, isFetching: true }
    case 'AXIOS_FETCH_SUCCESSFUL':
      return { ...state, isFetching: false, data: action.payload }
    case 'AXIOS_FETCH_ERROR':
      return { ...state, isFetching: false, error: action.payload }
    default:
      return state
  }
}
