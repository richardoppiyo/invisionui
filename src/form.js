import React from "react";
import './form.css';

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
        <form onSubmit={this.handleSubmit} className="form-div">
            <div>
                <h1>Let's set up your account</h1>
            </div>
            <div>
                <p>Already have an acoount? 
                <span><a href="/">Sign In</a></span>
                </p>
            </div>
          <div>
            <input className="form-element" type="text" onChange={this.handleChange} placeholder="Your name"/>
          </div>
          <div>
            <input className="form-element" type="text" onChange={this.handleChange} placeholder="Email address"/>
          </div>
            <select className="form-element2" onChange={this.handleChange}>
               <option value="none">I would describe my user type as</option>
                <option value="Superuser">Superuser</option>
                <option value="admin">Admin</option>
                <option value="finance">finance</option>
                <option value="member">Member</option>
             </select>
          <div>
            <input className="form-element" type="password" onChange={this.handleChange} placeholder="password"/>
          </div>
     
          <input className="form-element3" type="submit" value="Next" />
          <div className="form-element3" >
                <p className="form-text">By clicking the "Next" button, you agree to creating a free acoount, and To <a href="/</p>">Terms of service</a> and  
             <a href="/"> Privacy Policy</a></p>
        </div>
        </form>
      );
    }
  }
  
 

  export default NameForm;