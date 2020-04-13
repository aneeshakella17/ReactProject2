import React, { Component } from 'react'
import {connect} from 'react-redux'

class LeaderBoard extends Component {
  render() {
    return (
      <div>
      {this.props.users_arr.map((u) =>
        <UserBlock key={this.props.users_dic[u].id}
        user={this.props.users_dic[u]}  dispatch={this.props.dispatch}/>)}
    </div>
  )
  }
}

function UserBlock(props) {
  return (
     <div className='profile'>
       <div className='pic_profile'>
         <img src={props.user.avatarURL} alt="No User Signed In"/>
       </div>
       <div className='pic_name'>
        <h2>  {props.user.name}
          <br />
          Questions Asked: {props.user.questions.length}
          <br />
          Questions Answered: {Object.keys(props.user.answers).length}
          </h2>
       </div>
     </div>
  )
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users_arr: Object.keys(users).sort((a, b) => users[a].questions.length + Object.keys(users[a].answers).length >
      users[b].questions.length + Object.keys(users[b].answers).length ? -1:1),
    users_dic: users,
    authedUser : authedUser,
  }
}

export default connect(mapStateToProps)(LeaderBoard)
