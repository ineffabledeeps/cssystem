import React from "react";
import logo from "../logo.svg"

async function loginUser(credentials) {
  return fetch('http://localhost:9000/testAPI', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

class LoginForm extends React.Component {

  constructor(){
    super();
    this.state={
      username:sessionStorage.getItem('username')
    }
  }

  handleSubmit = async e => {
    const {username}=this.state;
    e.preventDefault();
    const token = await loginUser({
      username
        });
    this.setToken(token);
  }

  setToken(userToken){
      sessionStorage.setItem('token', JSON.stringify(userToken));
      const token=sessionStorage.getItem('token');
      sessionStorage.setItem('username',this.state.username);
      console.log(token)
      window.location.reload(false)
  }

  render() {
    return (
      <div className="row h-100 align-items-center">
        <div className="col-lg-5 col-md-8 mx-auto">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title text-start mb-5"><span className=" border-bottom-bluish">LOGIN</span></h5>
              <img src={logo} className="rounded-circle bg-dark" height="120px" width="120px"></img>
              <div className="text-center form-label mt-2">
                <div className="mb-3 px-4">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label fw-bolder text-bluish"
                  >
                    Username
                  </label>
                  <input
                    type="email"
                    className="bg-lightblue form-control text-center border-0"
                    id="exampleFormControlInput1"
                    placeholder="eg: Ineffabledeeps"
                    onChange={e => this.setState({username:e.target.value})} 
                  ></input>
                </div>
              </div>
              <div className="form-check mt-2 float-start ms-4 m-0">
                <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
                <label className="" htmlFor="reverseCheck1">
                  I am an executive
                </label>
              </div>
              <a href="#" className="btn btn-grad mt-5 float-end fw-bolder text-light" onClick={this.handleSubmit}>
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm; // Don’t forget to use export default!