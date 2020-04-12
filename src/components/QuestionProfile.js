import React, { Component } from 'react'
import {connect} from 'react-redux'
import Answered_Question from './Answered_Question'
import Unanswered_Question from './Unanswered_Question'

class QuestionProfile extends Component {

  render() {
    return (
      !this.props.questions[this.props.id].optionOne.votes.includes(this.props.authedUser) &&
      !this.props.questions[this.props.id].optionTwo.votes.includes(this.props.authedUser) ?
      <Unanswered_Question match={{params: {id:this.props.id}}}/> :
      <Answered_Question match={{params: {id:this.props.id}}}/>
    )
  }
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
