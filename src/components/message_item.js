import React, {Component} from 'react';

export default class MessageItem extends Component {

  constructor(props){
    super(props);
    this.state = {status: 'list-group-item', item: this.props.index, edit_mode: false, message: this.props.message};
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
        <span className="input-group">
          <input type="text" className="form-control" onChange={(event) => this.setState({message: event.target.value})} value={this.state.message}
           onKeyPress={(event)=>{
             if(event.charCode==13) {
               this.props.changeHiddenState(this.state.item, this.state.message);
               this.setState({edit_mode: false});
             }
           }}></input>
          <span className="input-group-btn">
          <button className="btn btn-default glyphicon glyphicon-floppy-disk" onClick={() => {
            console.log(this.state.message);
            this.props.changeHiddenState(this.state.item, this.state.message);
            this.setState({edit_mode: false});
          }}></button>
          <button className="btn btn-default glyphicon glyphicon-remove" onClick={() => this.setState({edit_mode: false})}></button>
          </span>
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
      <span className="dropdown">
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
      </span>
    </div>
    </li>
  );
  }

}
