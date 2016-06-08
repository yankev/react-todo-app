import React, {Component} from 'react';
import MessageItem from './message_item';

export default class MessageList extends Component {

  renderMessages() {
      //console.log(this.props.messages)
      return this.props.messages.map((message, index) => (
        //<li className="list-group-item">{message}</li>
        (<MessageItem key={message.id} index={message.id} message={message.val} remover={this.props.remover} changeHiddenState={this.props.changeHiddenState}/>)
      ));
  }

  render() {
      return(
          <ul className="list-group">
              {this.renderMessages()}
          </ul>
      );
  }
}
