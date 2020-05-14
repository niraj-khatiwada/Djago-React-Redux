import { combineReducers } from 'redux'
import { leadReducer } from './reducers/leads/leads.reducer'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfif = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const rootReduxer = combineReducers({
  lead: leadReducer,
})

export default persistReducer(persistConfif, rootReduxer)
