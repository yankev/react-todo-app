import React, {Component} from 'react';

export default class MessageItem extends Component {

  constructor(props){
    super(props);
    this.state = {status: 'list-group-item', item: this.props.index, edit_mode: false};
    //this.changestate = this.changestate.bind(this);
  }

  changestate(val) {

    if(val==1) {
      this.setState({status: 'list-group-item list-group-item-info'});
    }
    else if (val==2) {
      this.setState({status: 'list-group-item list-group-item-success'});
    }
    else if (val==3) {
      this.setState({status: 'list-group-item list-group-item-danger'});
      this.props.remover(this.state.item);
    }


  }

  editMode() {
    const edit_state = this.state.edit_mode;
    this.setState({edit_mode: !edit_state});
  }

  editmode_display() {
    const edit_state = this.state.edit_mode;
    if(edit_state) {
      return (
        <span className="glyphicon glyphicon-pencil">
          <input type="text"></input>
        </span>
      )
    }
    else {
      return (
        <span>&nbsp; {this.props.message} is message # {this.state.item}</span>
      )
    }
  }


  render() {

    return(
    <li className={this.state.status}>
    <div>
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Action
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li><a href="#" onClick={()=> {this.changestate(1)}}>
          <span className="glyphicon glyphicon-menu-right"></span>&nbsp;In Progress</a></li>
          <li><a href="#" onClick={()=> this.changestate(2)}>
          <span className="glyphicon glyphicon-ok-circle"></span>&nbsp;Completed</a></li>
          <li><a href="#" onClick={()=> this.changestate(3)}>
          <span className="glyphicon glyphicon-remove"></span>&nbsp;Remove Task</a></li>
          <li><a href="#" onClick={() => this.editMode()}><span className="glyphicon glyphicon-pencil"></span>&nbsp; Edit Mode</a></li>

        </ul>
        {this.editmode_display()}
      </div>
    </div>
    </li>
  );
  }

}
