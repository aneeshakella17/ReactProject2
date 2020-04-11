import React, { Component } from 'react'
import {connect} from 'react-redux'


class LoginList extends Component {
  // console.log("HIII")
  // console.log(this.props)
  render() {
    console.log("HIII")
    console.log(this.props.authedUser)
    return (
      <div>
      {this.props.authedUser}
      {this.props.users_arr.
        map((u) => <LoginBlock user={this.props.users_dic[u]} authedUser={this.props.authedUser}/>)}
    </div>
  )
  }
}

function LoginBlock(props) {
 if (props.authedUser === props.user.id){
   return (
     <div>
      <div className='profile shadowfilter'>
        <div className='pic_profile'>
          <img src={props.user.avatarURL} alt="Profile Pic"/>
        </div>
        <div className='pic_name'>
          <h1> {props.user.name} </h1>
        </div>
      </div>
     </div>
   )
 }


 return (
   <div>
    <div className='profile'>
      <div className='pic_profile'>
        <img src={props.user.avatarURL} alt="Profile Pic"/>
      </div>
      <div className='pic_name'>
        <h1> {props.user.name} </h1>
      </div>
    </div>
   </div>
 )
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users_arr: Object.keys(users),
    users_dic: users,
    authedUser : authedUser,
  }
}

export default connect(mapStateToProps)(LoginList)
