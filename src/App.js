import React, { Component } from 'react';
import logo from './img/Piazza_logo.png';
import './App.css';
import { browserHistory } from 'react-router';

class App extends Component {
  componentDidMount() {
    document.title = "Piazza - Login";
  }

  constructor(props) {
    super(props);
    this.state = { email: "", password: "", showError: false, errMessage: "" };
  }

  handleEmailChange = (e) => this.setState({ email: e.target.value });
  handlePasswordChange = (e) => this.setState({ password: e.target.value });

  handleSubmit(e, email, password) {
    e.preventDefault();

    if (email.trim() === "") {
      this.setState({ showError: true });
      this.setState({ errMessage: "Empty email" });
    } else if (password.trim() === "") {
      this.setState({ showError: true });
      this.setState({ errMessage: "Empty password" });
    } else if (email === "admin@ubc.ca" && password === "123456") {
      browserHistory.push('/questions');
      // setTimeout(() => {
      //   browserHistory.push('/questions');
      // }, 1000);
    } else {
      this.setState({ showError: true });
      this.setState({ errMessage: "Incorrect email/password" });
    }
  }

  render() {
    const { email, password, showError, errMessage } = this.state;
    const errClass = showError ? "show-error-message" : "";

    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt="logo" width="200" />
        </div>
        <form className="login-form" onSubmit={(e) => this.handleSubmit(e, email, password)}>
          <div>Email</div>
          <input type="text" value={email} onChange={this.handleEmailChange} id="emailTextField"></input>
          <div>Password</div>
          <input type="password" value={password} onChange={this.handlePasswordChange} id="passwordTextField"></input>
          <div>
            <input type="submit" value="Login" id="submitBtn" />
          </div>
        </form>
        <div className={`error-message`}>
          <div className={`${errClass}`}>
            {errMessage}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
