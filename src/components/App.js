import React, { Component } from 'react'
import {connect} from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log("HI")
    console.log(this.props)
    return (
      <div>
      <LoadingBar />
      {this.props.loading === true
       ? null
       : <div> {this.props.name} </div>}
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
