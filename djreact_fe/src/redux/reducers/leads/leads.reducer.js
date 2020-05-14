import { axiosFetch } from '../utils/reducers.utils'

const INITIAL_STATE = {
  leadList: { isListFetching: false, listData: null, listError: undefined },
  leadDelete: {
    isDeleteFetching: false,
    deleteData: null,
    deleteError: undefined,
  },
}

export const leadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case axiosFetch.LIST.START:
      return { ...state, leadList: { ...state.leadList, isListFetching: true } }
    case axiosFetch.LIST.SUCCESS:
      return {
        ...state,
        leadList: {
          ...state.leadList,
          isListFetching: false,
          listData: action.payload,
        },
      }
    case axiosFetch.LIST.ERROR:
      return {
        ...state,
        leadList: {
          ...state.leadList,
          isListFetching: false,
          listError: action.payload,
        },
      }
    case axiosFetch.DELETE.START:
      return {
        ...state,
        leadDelete: { ...state.leadDelete, isDeleteFetching: true },
      }
    case axiosFetch.DELETE.SUCCESS:
      return {
        ...state,
        leadDelete: {
          ...state.leadDelete,
          isDeleteFetching: false,
          deleteData: action.payload,
        },
        leadList: {
          ...state.leadList,
          listData: state.leadList.listData.filter(
            (item) => item.id !== action.payload.object.id
          ),
        },
      }
    case axiosFetch.DELETE.ERROR:
      return {
        ...state,
        leadDelete: {
          ...state.leadDelete,
          isDeleteFetching: false,
          deleteError: action.payload,
        },
      }
    default:
      return state
  }
}
