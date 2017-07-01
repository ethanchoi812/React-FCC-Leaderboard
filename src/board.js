import React, { Component } from 'react';

class Board extends Component {
	constructor(props){
		super(props);
		this.state = {
			users:[],
		}
	}
	
	componentDidMount(){	
		const url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
		
		fetch(url)
		.then(blob => blob.json())
		.then(data => this.setState({users: data}));
	}

	render(){
		const users = this.state.users;
		const topList = users.slice(0, 30);
		const fcc = "https://freecodecamp.com/";

		const listItems = topList.map((user, index)=>
			<tr>
				<td>{index + 1}</td>
				<td>
					<img className="profile-pic" src={user.img}/>
					<a href={fcc + user.username}>
					{user.username}
					</a>
				</td>
				<td>{user.recent}</td>
				<td>{user.alltime}</td>
			</tr>
			);

		return (
			<table>
				<tr>
					<td>#</td>
					<td>Camper</td>
					<td>Past 30 days points</td>
					<td>All-time points</td>
				</tr>
				{listItems}
			</table>
	);
  }
}

export default Board;