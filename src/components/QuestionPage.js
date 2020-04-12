import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class QuestionPage extends Component {
  render() {
    return (
      <div>
      <h2 align='center'> Unanswered </h2>
      {this.props.unanswered.map((q) =>
        <QuestionBlock question={this.props.questions[q]}  dispatch={this.props.dispatch}/>)
      }
      <h2 align='center'> Answered </h2>
      {this.props.answered.map((q) =>
        <QuestionBlock question={this.props.questions[q]}  dispatch={this.props.dispatch}/>)}
    </div>
  )
  }
}

function QuestionBlock(props) {


  return (
    <Link to={"/question/" + props.question.id} style={{ textDecoration: 'none' }}>
        <div className='question'>
          <div className = 'center'> <font size="5" color="red"> {props.question.optionOne.text} </font> </div>
          <div className = 'center'>  <font size="5" color="blue">  {props.question.optionTwo.text} </font> </div>
        </div>
    </Link>
  )
}

function mapStateToProps ({ questions, authedUser }) {
  return {
    unanswered: Object.keys(questions).filter((q) => !questions[q].optionOne.votes.includes(authedUser) &&
      !questions[q].optionTwo.votes.includes(authedUser)).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    answered: Object.keys(questions).filter((q) => questions[q].optionOne.votes.includes(authedUser) ||
    questions[q].optionTwo.votes.includes(authedUser)).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    questions,
  }
}

export default connect(mapStateToProps)(QuestionPage)
