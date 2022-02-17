import React, { Component } from "react";
import { InputStyle, BtnStyle, BG } from "./SignUpFormStyles.js";
import { signUp } from "../../Utilities/user-service";

export default class SignUpForm extends Component {
  // class field syntax
  state = {
    name: "",
    user: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // We don't want to send the confirm or error properties
      // Let's make a copy of this.state (we never want to directly modify the state obj)
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  handleChange = (evt) => {
    // Unlike setters in function components,
    // this.setState MERGES the provided object, it does
    // NOT replace it
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  // Must override the render method
  // The render method take the place of a function component
  // That is, it will ultimately return its UI as JSX
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <BG>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div>
              <label>Name</label>
              <InputStyle
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>

            <div>
              <label>Username</label>
              <InputStyle
                type="text"
                name="user"
                value={this.state.user}
                onChange={this.handleChange}
                required
              />
            </div>

            <div>
              <label>Password</label>
              <InputStyle
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>

            <div>

            </div>
            <label>Confirm</label>
            <InputStyle
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <BtnStyle type="submit" disabled={disable}>
              SIGN UP
            </BtnStyle>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </BG>
    );
  }
}
