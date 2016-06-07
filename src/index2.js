import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MessageBar from './components/input_bar';
import MessageList from './components/message_list'

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
      hidden: 'starter',
			message: 'Leave a message',
      message_array: [],
      num_messages: 0
		};

    this.changeHidden = this.changeHidden.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.buttonClick = this.buttonClick.bind(this);  // adding this so I can press enter in the textbox

	}

	changeHidden(text) {
    //console.log('typing');
    this.setState({hidden: text});
  }

  buttonClick() {
    this.state.num_messages += 1;
    const temp = this.state.message_array;
    temp.push({id: this.state.num_messages, val: this.state.hidden});
    this.setState({message_array: temp, message: this.state.hidden});

  }

	removeItem(id){

		var temp = this.state.message_array;
		var index = null;
		for(var i=0; i<temp.length; i++) {
			if(temp[i].id == id) {
				index = i;
				break;
			}
		}
		if(index || index===0) {
			temp.splice(index,1);
			this.setState({message_array: temp});
		}

	}

	render() {
		return (
		<div>
     <h3><span className="badge">{this.state.message_array.length}</span> Tasks: </h3>
     <div className="panel panel-primary">

      <MessageList messages={this.state.message_array} remover={this.removeItem}/>
     </div>
     <br />
     <div className="row">
       <div className="col-lg-6">
         <div className="input-group">
           <MessageBar fun={this.changeHidden} onEnter={this.buttonClick}/>
           <span className="input-group-btn">
             <button onClick={() => this.buttonClick()} className="btn btn-primary">
             Update</button>
           </span>
         </div>
       </div>
     </div>
    </div> );
	}


}

ReactDOM.render(<App />, document.querySelector('.container'));