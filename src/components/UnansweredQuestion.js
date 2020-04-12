import React, { Component } from 'react'
import {connect} from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class Unanswered_Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer : '',
      isOption1 : false,
      isOption2 : false
    }
  }

  optionOneChange = (e) => {
    if (this.state.isOption2) {
      alert("Please Deselect Option Two")
      document.getElementById("option1").checked = false;
    } else {
      this.setState({
      isOption1: !this.state.isOption1
    })
  }
}

  optionTwoChange = (e) =>    {
    if (this.state.isOption1) {
        alert("Please Deselect Option One")
        document.getElementById("option2").checked = false;
      } else {
        this.setState({
        isOption2: !this.state.isOption2
      })
    }
  }


  handleSubmit = (e) => {
      e.preventDefault()
      const { dispatch } = this.props
      if ( !this.state.isOption1 && !this.state.isOption2 ) {
        alert("Please select a box")
      } else {
        this.state.isOption1 ?
        dispatch(handleAnswerQuestion(this.props.question.id, "optionOne"))
        : dispatch(handleAnswerQuestion(this.props.question.id, "optionTwo"))
      }
  }

  render() {
    return (
         <div className='question_profile'>
          <div className='question_pic'>
            <img src={this.props.avatarURL} alt="Profile Pick"/>
          </div>

          <div className='question_text'>
              <form onSubmit={this.handleSubmit}>
              <h2>
              <font size="6" color="pink">
                 Would You Rather?
               </font>
              </h2>

              <div>
                  <input type="checkbox" id="option1" onChange = {this.optionOneChange} />
                      <label for="option1"> <font size="5" color="red">
                        {this.props.question.optionOne.text}
                      </font>
                      </label>
                </div>


                <div>
                  <input type="checkbox" id="option2" onChange = {this.optionTwoChange}/>
                    <label for="option2">  <font size="5" color="blue">
                    {this.props.question.optionTwo.text} </font> </label>
                 </div>
                 <input type="submit" value="Submit"/>
              </form>
            </div>
         </div>
      )
  }
}


function mapStateToProps ({ questions, users, authedUser}, props) {
 const {id} = props.match.params
  return {
    question: questions[id],
    avatarURL: users[questions[id].author].avatarURL,
    authedUser : authedUser,
  }
}

export default connect(mapStateToProps)(Unanswered_Question)
