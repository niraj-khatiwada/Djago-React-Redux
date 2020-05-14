import { combineReducers } from 'redux'
import {
  leadListReducer,
  leadDestroyReducer,
} from './reducers/leads/leads.reducer'

export default combineReducers({
  leadList: leadListReducer,
  leadDestroy: leadDestroyReducer,
})
