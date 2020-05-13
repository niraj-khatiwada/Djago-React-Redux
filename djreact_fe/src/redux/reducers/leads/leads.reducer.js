const INITIAL_STATE = {}

export const leadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DUMMY_ACTION':
      return { ...state, response: action.payload }
    default:
      return state
  }
}
