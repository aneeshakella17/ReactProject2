import React, { Component } from 'react'
import {connect} from 'react-redux'

class Answered_Question extends Component {

  render () {
    return (
    <div className='question_profile'>
       <div className='question_pic'>
         <img src={this.props.avatarURL} alt="Profile Pic"/>
       </div>

     <div className='question_text'>
           <h2>
           <font size="6" color="pink">
              Would You Rather?
            </font>
           </h2>
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

            <div>
               <font size="5" color="green">
                  You chose {this.props.question.optionTwo.votes.includes(this.props.authedUser) ? "Option 2" : "Option 1"}
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
    authedUser,
  }
}

export default connect(mapStateToProps)(Answered_Question)
