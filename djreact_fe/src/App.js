import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { axiosFetchListAsync } from './redux/reducers/leads/leads.action'
import Appbar from './components/utils/Appbar/Appbar.component'
import Leads from './components/Leads.component'
import Login from './components/Authentication/Login.component'

class App extends React.Component {
  componentDidMount() {
    this.props.axiosGET()
  }
  render() {
    return (
      <React.Fragment>
        <Appbar />
        <Switch>
          <Route exact path="/" render={() => <Leads />} />
          <Route exact path="/login" render={() => <Login />} />
        </Switch>
      </React.Fragment>
    )
  }
}

const mapDipatchToProps = (dispatch) => ({
  axiosGET: () => dispatch(axiosFetchListAsync()),
})
export default connect(null, mapDipatchToProps)(App)
