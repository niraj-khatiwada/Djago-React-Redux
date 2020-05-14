import { combineReducers } from 'redux'
import { leadReducer } from './reducers/leads/leads.reducer'

export default combineReducers({
  lead: leadReducer,
})
