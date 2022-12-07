import React, { Component } from "react";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      userData: {
        firstName: "",
        lastName: "",
        DOB: "",
        Email: "",
        password: "",
        PhoneNumber: "",
        Gender: "",
        City: "",
        state: "",
        Pin: "",
      },
      userDetail: [
        {
          firstName: "",
          lastName: "",
          DOB: "",
          Email: "",
          password: "",
          PhoneNumber: "",
          Gender: "",
          City: "",
          state: "",
          Pin: "",
        },
      ],
    };
  }

  setRegisterValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  printRegisterValue = (e) => {
    e.preventDefault();
    this.state.userDetail.push(this.state.userData);
    this.setState({
      userDetail: this.state.userDetail,
    });
    console.log(this.state.userDetail);
  };

  render() {
    return (
      <div className="container-fluid p-3">
        <h1 className="text-center">Register Form</h1>
        <div className="row g-3 form">
          <div className="row g-3">
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="firstName"
                type="text"
                className="form-control"
                placeholder="first name"
                value={this.state.userData.firstName}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="lastName"
                type="text"
                className="form-control"
                placeholder="last name"
                value={this.state.userData.lastName}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name=" DateOfBirth"
                type="Date"
                className="form-control"
                placeholder="Date Of Birth"
                value={this.state.userData.DateOfBirth}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="Email"
                type="text"
                className="form-control"
                placeholder="Email"
                value={this.state.userData.Email}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.userData.password}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="PhoneNumber"
                type="Number"
                className="form-control"
                placeholder="Phone Number"
                value={this.state.userData.PhoneNumber}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="Gender"
                type="text"
                className="form-control"
                placeholder="Gender"
                value={this.state.userData.Gender}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="City"
                type="City"
                className="form-control"
                placeholder="City"
                value={this.state.userData.City}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="state"
                type="text"
                className="form-control"
                placeholder="State"
                value={this.state.userData.state}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="Pin"
                type="Number"
                className="form-control"
                placeholder="Pin"
                value={this.state.userData.Pin}
              />
            </div>
            <div className="col-md-3">
              <input
                onChange={this.setRegisterValue}
                type="submit"
                className="form-control bg-primary text-light"
                value="Register"
                onClick={this.printRegisterValue}
              />
            </div>
          </div>
        </div>
        <br></br>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">FirstName</th>
                <th scope="col">lastName</th>
                <th scope="col">DOB</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">PhoneNumber</th>
                <th scope="col">Gender</th>
                <th scope="col">City</th>
                <th scope="col"> State</th>
                <th scope="col">Pin</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userDetail.map((data, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.Email}</td>
                  <td>{data.password}</td>
                  <td>{data.PhoneNumber}</td>
                  <td>{data.Gender}</td>
                  <td>{data.City}</td>
                  <td>{data.state}</td>
                  <td>{data.Pin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
