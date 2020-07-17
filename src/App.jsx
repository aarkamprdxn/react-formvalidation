import React, { Component } from "react";


//checking form is validate or not
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };

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

    
  // Submit button function for display result in console
    handleSumbit = event => {
        event.preventDefault();
    
        if (formValid(this.state.formError)) {
          console.log(`
          ** Submitted      
          firstName:${this.state.firstName}
          lastName:${this.state.lastName}
          email:${this.state.email}
          password:${this.state.password}
          `);
        } else {
          console.log("form error");
        }
      };
      // for taking value from all input
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Atlest 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "Atlest 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Atlest 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

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