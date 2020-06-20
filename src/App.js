import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstOne: '',
      secondOne: '',
      thirdOne: '',
      users: [{ firstOne: "" }],
      addButton: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addClick() {
    this.setState(prevState => ({
      users: [...prevState.users, { firstOne: "" }],
      addButton: true
    }))
  }
  addChange() {
    this.setState(prevState => ({
      addButton: !prevState.addButton
    }))
  }

  createUI() {
    return this.state.users.map((el, i) => (
      <div key={i}>
        <input className="task-input" placeholder="First Name" name="firstOne" value= {el.firstOne || ''} onChange={this.handleChange.bind(this, i)} />
        <input type='button' title="Add" className="add-task-btn increment" value='+' onClick={this.addClick.bind(this)} />
        <input type='button' title="Remove" className="add-task-btn decrement" value='-' onClick={this.removeClick.bind(this, i)} />
      </div>
    ))
  }

  handleChange(i, e) {
    const { name, value } = e.target;
    let users = [...this.state.users];
    users[i] = { ...users[i], [name]: value };
    this.setState({ users });
  }
  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]:value });
  }

  removeClick(i) {
    let users = [...this.state.users];
    users.splice(i, 1);
    this.setState({ users });
  }

  handleSubmit(event) {
    console.log('this.state.users:', this.state.users)
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-input">
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstOne" value={this.state.firstOne} className="task-input" onChange={this.handleInputChange.bind(this)}/><br/>
        <input type="text" name="secondOne" value={this.state.secondOne} className="task-input" onChange={this.handleInputChange.bind(this)}/><br/>
        <input type="text" name="thirdOne" value={this.state.thirdOne} className="task-input" onChange={this.handleInputChange.bind(this)}/><br/>
        {this.state.users.length <= 0 && !this.state.addButton ? <input type='button' title="Add" className="add-task-btn" value='Add More' onClick={this.addChange.bind(this)} /> : ''}
        {this.state.addButton ? <>
        {this.createUI()} </> : <input type='button' title="Add" className="add-task-btn" value='Add More' onClick={this.addChange.bind(this)} />}
        <input type="submit" className="add-task-btn" value="Submit" />
      </form>
      </div>
    );
  }
}

export default App;
