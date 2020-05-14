import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { axiosFetchListAsync } from './redux/reducers/leads/leads.action'
import Appbar from './components/utils/Appbar/Appbar.component'

const Leads = lazy(() => import('./components/Leads.component'))
const Post = lazy(() => import('./components/Authentication/Post.component'))

class App extends React.Component {
  componentDidMount() {
    this.props.axiosGET()
  }
  render() {
    return (
      <React.Fragment>
        <Appbar />
        <Switch>
          <Suspense fallback={<h1></h1>}>
            <Route exact path="/" render={() => <Leads />} />
            <Route
              exact
              path="/post"
              render={(routeProps) => <Post routeProps={routeProps} />}
            />
          </Suspense>
        </Switch>
      </React.Fragment>
    )
  }
}

const mapDipatchToProps = (dispatch) => ({
  axiosGET: () => dispatch(axiosFetchListAsync()),
})
export default connect(null, mapDipatchToProps)(App)
