import React, { Component } from 'react';
import Headings from './headings';

class Board extends Component {
	constructor(props){
		super(props);
		this.state = {
			users:[],
			sortBy:'recent'
		}

		this.handleSortChange = this.handleSortChange.bind(this);
	}
	
	componentDidMount(){	
		const url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
		
		fetch(url)
		.then(blob => blob.json())
		.then(data => this.setState({users: data}));
	}

	handleSortChange(prop){
		this.setState({sortBy:prop});
	}

	sortFunc(arr, prop){
		arr = arr.sort(function(a,b){
			return (a[prop] > b[prop])
		});
	}

	render(){
		const users = this.state.users;
		const topList = users.slice(0, 30);

		const sortBy = this.state.sortBy;
		const sorted = topList.sort((a,b) => (b[sortBy] - a[sortBy]));
		const fcc = "https://freecodecamp.com/";

		const listItems = sorted.map((user, index)=>
			<tr>
				<td>{index + 1}</td>
				<td className="user">
					<img className="profile-pic" src={user.img}/>
					<a href={fcc + user.username}>
					<span className="username">{user.username}</span>
					</a>
				</td>
				<td>{user.recent}</td>
				<td>{user.alltime}</td>
			</tr>
			);

		return (
			<table>
				<thead>
				<Headings onSortChange={this.handleSortChange} />
				</thead>
				<tbody>
				{listItems}
				</tbody>
			</table>
	);
  }
}

export default Board;