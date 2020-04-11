import React, { Component } from 'react'
import {connect} from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import LoginList from './LoginList'
import NewQuestion from './NewQuestion'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
      <LoadingBar />
      {this.props.loading === true
       ? null
       : <NewQuestion/>}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    name: authedUser ? authedUser : null
  }
}

export default connect(mapStateToProps)(App)
