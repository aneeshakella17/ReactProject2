import React, {Component} from 'react'

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li>
                <img src={this.props.avatarURL} alt="Profile Pick" height="50" width = ""/>
                {this.props.authedUser}
                </li>
                <li><a href="#">LeaderBord</a></li>
                <li><a href="#">Question Page</a></li>
                <li>  <font size="5" color="pink"> Would You Rather? </font> </li>
                <li><a href="#">New Question</a></li>
                <li><a href="#">Login/Sign Out</a></li>
              </ul>
            </div>
        );
    }
}

export default Navbar;
