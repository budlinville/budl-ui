import React, { Component } from 'react';
import Title from './Title';
import profile from '../../../resources/profile.jpg';

class Portfolio extends Component {
	state = { displayBio: false };

	toggleDisplayBio = () => {
		this.setState({ displayBio: !this.state.displayBio });
	}

	render() {
		return (
			<div className='portfolio'>
				<img src={profile} alt='profile' className="profile" />
				<h1>Bud Linville</h1>
				<Title />
				{ this.state.displayBio ? (
					<div>
						<p>Current Softweare Engineer II at Walmart Labs</p>
						<p>Former Software Engineer Intern at Garmin</p>
						<button onClick={this.toggleDisplayBio}>Show less</button>
					</div>
				) : (
					<div>
						<button onClick={this.toggleDisplayBio}>Read more</button>
					</div>        
				)}
			</div>
		)
	}
}

export default Portfolio;
