import React, { Component } from "react";

class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        formErrors: {
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }
      };
    }
    render() {    
        return (
          <div className="wrapper">
            <div className="form-wrapper">
              <h1>Form Validation</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="firstName">
                  <label>First Name</label>
                  <input
                    className={formErrors.firstName.length > 0 ? "error" : null}
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="lastName">
                  <label>Last Name</label>
                  <input
                    className={formErrors.lastName.length > 0 ? "error" : null}
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="email">
                  <label>Email</label>
                  <input
                    className={formErrors.email.length > 0 ? "error" : null}
                    placeholder="Email"
                    type="email"
                    name="email"
                    noValidate
                    onChange={this.handleChange}
                  />
                </div>
                <div className="password">
                  <label>Password</label>
                  <input
                    className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="submitButton">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        );
    }
}
export default App;