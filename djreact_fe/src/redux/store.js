import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import rootReducers from './rootReducers'
import thunk from 'redux-thunk'

const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export default createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...middleware))
)
