import React, { Component } from 'react'
import {connect} from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import LoginList from './LoginList'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'
import QuestionProfile from './QuestionProfile'

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
       : <QuestionProfile match={{params: {id:"am8ehyc8byjqgar0jgpub9"}}}/>}
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
