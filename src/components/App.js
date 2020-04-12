import React, { Component } from 'react'
import {connect} from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Navbar from './Navbar'
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
       :
       <div>
       <Navbar authedUser={this.props.name} avatarURL = {this.props.avatarURL}/>
       <div>
        <NewQuestion/>
        </div>
        </div>}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users}) {
  return {
    loading: authedUser === null,
    name: authedUser ? authedUser : null,
    avatarURL: authedUser ? users[authedUser].avatarURL : null
  }
}

export default connect(mapStateToProps)(App)
