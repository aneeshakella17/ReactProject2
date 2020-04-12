import React, { Component } from 'react'
import {connect} from 'react-redux'

class QuestionProfile extends Component {
  render() {
    return (
      <div>
        <ProfileBlock question={this.props.question}
        avatarURL={this.props.avatarURL}/>
      </div>
    )
  }
}

function ProfileBlock(props) {
  return (
     <div className='question_profile'>
      <div className='question_pic'>
        <img src={props.avatarURL} alt="Profile Pick"/>
      </div>

      <div className='question_text'>
          <form>
            <div className = 'center'>
              <input type="checkbox" id="option1" />
                  <label for="option1"> <font size="5" color="red">
                  {props.question.optionOne.text}
                  </font>
                  </label>
            </div>


            <div className = 'center'>
              <input type="checkbox" id="option2"/>
                <label for="option2">  <font size="5" color="blue">
                {props.question.optionTwo.text} </font> </label>
             </div>
          </form>
        </div>
     </div>
  )
}

function mapStateToProps ({ questions, users, authedUser}, props) {
 const {id} = props.match.params
  return {
    question: questions[id],
    avatarURL: users[questions[id].author].avatarURL,
    authedUser : authedUser,
  }
}

export default connect(mapStateToProps)(QuestionProfile)
