import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li>
                <img src={this.props.avatarURL} alt="Profile Pick" height="50" width = ""/>
                {this.props.authedUser}
                </li>
                <li> <NavLink to='/leaderboard' exact activeClassName='active'>Leaderboard</NavLink></li>
                <li><NavLink to='/' exact activeClassName='active'>Question Page</NavLink></li>
                <li>  <font size="5" color="pink"> Would You Rather? </font> </li>
                <li><NavLink to='/add' exact activeClassName='active'>New Question</NavLink></li>
                <li><NavLink to='/login' exact activeClassName='active'>Login/Sign Out</NavLink></li>
              </ul>
            </div>
        );
    }
}

export default Navbar;
