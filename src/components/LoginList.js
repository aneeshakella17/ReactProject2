import React, { Component } from 'react'
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import {Link} from 'react-router-dom'


class LoginList extends Component {
  render() {
    return (
      <div>
      <h2 align="center"> {this.props.authedUser !== "" ? `Current User is ${this.props.authedUser}.`  : `Please Select a User`} </h2>
      <h2 align="center"> {this.props.authedUser !== "" ? `Click on your profile to logout.`  : ``} </h2>

      {this.props.users_arr.map((u) =>
        <LoginBlock user={this.props.users_dic[u]} authedUser={this.props.authedUser} dispatch={this.props.dispatch}/>)}
    </div>
  )
  }
}


function LoginBlock(props) {

 function handleClick(e) {
   e.preventDefault();
   props.dispatch(setAuthedUser(props.user.id))
 }

 return (

   <div onClick={(e) => handleClick(e)}>
      <Link to={"/"} style={{ textDecoration: 'none' }}>
        <div className={props.authedUser === props.user.id ?
          'profile shadowfilter' :'profile'}>
          <div className='pic_profile'>
            <img src={props.user.avatarURL} alt="Profile Pic"/>
          </div>
          <div className='pic_name'>
            <h1> {props.user.name} </h1>
          </div>
        </div>
      </Link>
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
