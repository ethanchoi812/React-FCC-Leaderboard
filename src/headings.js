import React, { Component } from 'react';

class Headings extends Component{
	constructor(props){
		super(props);

		this.handleRecentClick = this.handleRecentClick.bind(this);
		this.handleAlltimeClick = this.handleAlltimeClick.bind(this);
	}

	arrowChange(name){
		const arrows = document.querySelectorAll(".arrow");

		arrows.forEach(arrow => arrow.classList.contains(name) ?
			arrow.style.color = '#7affc7' :
			arrow.style.color = '#ccc');
	}

	handleRecentClick(e){
		this.props.onSortChange('recent');
		this.arrowChange('recent');
	}
	
	handleAlltimeClick(e){
		this.props.onSortChange('alltime');
		this.arrowChange('alltime');
	}

	render(){

		return(
			<tr>
				<th scope="col">#</th>
				<th scope="col">Camper</th>
				<th className="sorter-heading" onClick={this.handleRecentClick} scope="col">Past 30 days points <span className="arrow recent">&#8623;</span></th>
				<th className="sorter-heading" onClick={this.handleAlltimeClick} scope="col">All-time points <span className="arrow alltime">&#8623;</span></th>
			</tr>
		)
	}
}

export default Headings;