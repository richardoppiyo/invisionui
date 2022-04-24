import React from "react";
import { ReactDOM } from "react";


class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Name"/>
          </div>
          <div>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Email"/>
          </div>
            <select value={this.state.value} onChange={this.handleChange}>
               <option value="none">I would describe my user type as</option>
                <option value="Superuser">Superuser</option>
                <option value="admin">admin</option>
                <option value="finance">finance</option>
                <option value="member">member</option>
             </select>
          <div>
            <input type="password" value={this.state.value} onChange={this.handleChange} placeholder="password"/>
          </div>
     
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );

  export default NameForm;