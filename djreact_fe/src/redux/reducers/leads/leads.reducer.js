import { axiosFetch } from '../utils/reducers.utils'

const INITIAL_STATE = {
  leadList: { isListFetching: false, listData: null, listError: undefined },
  leadDelete: {
    isDeleteFetching: false,
    deleteData: null,
    deleteError: undefined,
  },
  leadCreate: {
    isCreateFetching: false,
    createData: null,
    createError: undefined,
  },
  token: document.cookie,
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
    case axiosFetch.CREATE.START:
      return {
        ...state,
        leadCreate: {
          ...state.leadCreate,
          isCreateFetching: true,
        },
      }
    case axiosFetch.CREATE.SUCCESS:
      return {
        ...state,
        leadCreate: {
          ...state.leadCreate,
          isCreateFetching: false,
          createData: action.payload,
        },
        leadList: {
          ...state.leadList,
          listData: [...state.leadList.listData, action.payload],
        },
      }
    case axiosFetch.CREATE.ERROR:
      return {
        ...state,
        leadCreate: {
          ...state.leadCreate,
          isCreateFetching: false,
          createError: action.payload,
        },
      }
    default:
      return state
  }
}
