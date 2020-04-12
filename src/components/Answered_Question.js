import React, { Component } from 'react'
import {connect} from 'react-redux'

class Answered_Question extends Component {

  render () {
    return (
    <div className='question_profile'>
       <div className='question_pic'>
         <img src={this.props.avatarURL} alt="Profile Pick"/>
       </div>

     <div className='question_text'>
           <h2> Would You Rather </h2>
           <div>
              <font size="5" color="red">
                 {this.props.question.optionOne.text}
                 : {this.props.question.optionOne.votes.length}
              </font>
           </div>


           <div>
              <font size="5" color="blue">
               {this.props.question.optionTwo.text}
               : {this.props.question.optionTwo.votes.length}
              </font>
            </div>
       </div>
    </div> )
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

export default connect(mapStateToProps)(Answered_Question)
