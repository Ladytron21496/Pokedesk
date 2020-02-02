import React from "react";

class Testing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }, () => {
      // console.log(this.state.age);
      //  console.log(this.state.username);
    });
  };

  handleForm = () => {
    console.log("form submitted");
    console.log(this.state.username);
    console.log(this.state.age);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          ></input>
          <input type="submit" onClick={this.handleForm}></input>
        </form>
      </div>
    );
  }
}

export default Testing;
