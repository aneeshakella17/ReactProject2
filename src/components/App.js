import React, { Component , Fragment} from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
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
              <Navbar avatarURL={this.props.avatarURL} authedUser={this.props.authedUser}/>
              {this.props.loading === true
                ? null
                :
                <Switch>
                  { this.props.authedUser === "" ?
                    (<Route path='/' exact component={LoginList} />) :
                    (<Fragment>
                      <Route path='/' exact component={QuestionPage} />
                      <Route path='/question/:id' component={QuestionProfile} />
                      <Route path='/add' component={NewQuestion} />
                      <Route path='/leaderboard' component={LeaderBoard} />
                      <Route path='/login' component={LoginList} />
                    </Fragment>)
                  }
                    <Route component={ErrorComponent} />
                </Switch>}
            </div>
          </Fragment>
        </Router>
    )
  }
}

function ErrorComponent () {
    return (
      <div>
    <h3>404 - Not found</h3>
    <Link to="/">
        Return Home
    </Link>
    </div>
  );
}

function mapStateToProps ({ authedUser, users}) {
  return {
    loading: authedUser === null,
    name: authedUser ? authedUser : null,
    avatarURL: authedUser ? users[authedUser].avatarURL : null,
    authedUser,
  }
}

export default connect(mapStateToProps)(App)
