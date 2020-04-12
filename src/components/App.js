import React, { Component , Fragment} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
      <Router>
          <Fragment>
            <LoadingBar />
            <div className='container'>
              <Navbar avatarURL={this.props.avatarURL} authedUser={this.props.name}/>
              {this.props.loading === true
                ? null
                : <div>
                    <Route path='/' exact component={QuestionPage} />
                    <Route path='/question/:question_id' component={QuestionProfile} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route path='/login' component={LoginList} />
                  </div>}
            </div>
          </Fragment>
        </Router>
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
