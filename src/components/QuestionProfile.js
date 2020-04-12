import React, { Component } from 'react'
import {connect} from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'

class QuestionProfile extends Component {

  render() {
    return (
        !this.props.questions[this.props.id].optionOne.votes.includes(this.props.authedUser) &&
        !this.props.questions[this.props.id].optionTwo.votes.includes(this.props.authedUser) ?
        <UnansweredQuestion match={{params: {id:this.props.id}}}/> :
        <AnsweredQuestion match={{params: {id:this.props.id}}}/>
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
