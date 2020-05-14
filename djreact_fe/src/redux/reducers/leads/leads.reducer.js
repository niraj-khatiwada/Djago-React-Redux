import { axiosFetch } from '../utils/reducers.utils'

const LIST_INITIAL_STATE = {
  isListFetching: false,
  listData: null,
  listError: undefined,
}

export const leadListReducer = (state = LIST_INITIAL_STATE, action) => {
  switch (action.type) {
    case axiosFetch.LIST.START:
      return { ...state, isListFetching: true }
    case axiosFetch.LIST.SUCCESS:
      return { ...state, isListFetching: false, listData: action.payload }
    case axiosFetch.LIST.ERROR:
      return { ...state, isListFetching: false, listError: action.payload }
    default:
      return state
  }
}

const DELETE_INITIAL_STATE = {
  isDeleteFetching: false,
  deleteData: null,
  deleteError: undefined,
}
export const leadDestroyReducer = (state = DELETE_INITIAL_STATE, action) => {
  switch (action.type) {
    case axiosFetch.DELETE.START:
      return { ...state, isDeleteFetching: true }
    case axiosFetch.DELETE.SUCCESS:
      return { ...state, isDeleteFetching: false, deleteData: action.payload }
    case axiosFetch.DELETE.ERROR:
      return { ...state, isDeleteFetching: false, deleteError: action.payload }
    default:
      return state
  }
}
