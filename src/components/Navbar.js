import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component{
    render() {
      if (this.props.authedUser === ""){
        return (
          <div>
              <h2 align='center'> <font size="5" color="pink"> Would You Rather? </font> </h2>
          </div>
        )
      }

        return (
            <div>
              <ul id="nav">
                <li>
                <img src={this.props.avatarURL ? this.props.avatarURL : null} alt="Profile Pic" height="50" width = ""/>
                {this.props.authedUser}
                </li>
                <li> <NavLink to='/leaderboard' activeClassName='active'>Leaderboard</NavLink></li>
                <li><NavLink to='/' exact activeClassName='active'>Question Page</NavLink></li>
                <li> <font size="5" color="pink"> Would You Rather? </font> </li>
                <li><NavLink to='/add'  activeClassName='active'>New Question</NavLink></li>
                <li><NavLink to='/login'  activeClassName='active'>Login/Sign Out</NavLink></li>
              </ul>
            </div>
        );
    }
}

export default Navbar;
