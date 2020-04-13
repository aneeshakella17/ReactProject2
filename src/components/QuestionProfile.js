import React, { Component } from 'react'
import {connect} from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import {Link} from 'react-router-dom'

class QuestionProfile extends Component {

  render() {
    if(Object.keys(this.props.questions).includes(this.props.id)) {
      return (
          !this.props.questions[this.props.id].optionOne.votes.includes(this.props.authedUser) &&
          !this.props.questions[this.props.id].optionTwo.votes.includes(this.props.authedUser) ?
          <UnansweredQuestion match={{params: {id:this.props.id}}}/> :
          <AnsweredQuestion match={{params: {id:this.props.id}}}/>
        )
    }
    return <ErrorComponent />
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


function mapStateToProps ({ questions, authedUser}, props) {
  const {id} = props.match.params
  return {
    id,
    questions,
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionProfile)
