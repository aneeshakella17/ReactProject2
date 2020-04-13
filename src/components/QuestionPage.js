import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class QuestionPage extends Component {

  state = {
    seeAnswered : false
  }

   handleClick = (e) => {
    e.preventDefault()
    this.setState({
      seeAnswered: !this.state.seeAnswered
    })
  }

  render() {
    return (
      <div>

      <h2 onClick={this.handleClick} align='center'> <font size="5" color="green"> Click Here to {!this.state.seeAnswered ? "See Answered" : "See Unanswered" } </font> </h2>

      {!this.state.seeAnswered ?
      (
      <div>
      <h2 align='center'> Unanswered </h2>
      {this.props.unanswered.map((q) =>
        <QuestionBlock key={this.props.questions[q].id}
        question={this.props.questions[q]}  dispatch={this.props.dispatch}/>)
      } </div>) : (
      <div>
      <h2 align='center'> Answered </h2>
      {this.props.answered.map((q) =>
        <QuestionBlock key={this.props.questions[q].id}
        question={this.props.questions[q]}  dispatch={this.props.dispatch}/>)
      }
      </div>)
      }
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
