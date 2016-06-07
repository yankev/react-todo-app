import React, {Component} from 'react';

export default class MessageBar extends Component {

	constructor(props) {
		super(props);
		this.state = {term: ''};
	}

	checkEnter(event) {
		console.log(event.charCode);
		if(event.charCode==13) {
			this.props.onEnter();		
		}
	}

	render() {
		return (
			<div className='message-bar'>
				<input className="form-control"
					value={this.state.term}
					onChange={event => {this.onInputChange(event.target.value);}}
					onKeyPress={event => {this.checkEnter(event)}}
				/>
			</div>
			);
	}

	onInputChange(term) {
	   this.setState({term});
     this.props.fun(term);
    }
}
