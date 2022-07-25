import React from "react";
import logo from '../logo.svg';
import { useNavigate } from "react-router-dom";

function button(){

}

class Navbar extends React.Component {

  logout=()=>{
    sessionStorage.clear();
    window.location.reload(false);
  }

  render() {

    var logoutButton=null
    var navClass="navbar fixed-top bg-transparent"
    if(this.props.token){
      console.log(this.props.token)
      var navClass="navbar fixed-top bg-secondary"
      logoutButton=<button className="btn btn-sm btn-light display-none" onClick={this.logout}><i class="bi bi-power"></i> Logout</button>
    }
    return (
        <nav className={navClass}>
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                alt=""
                width="60px"
                height="50"
              ></img>
            </a>
            <div className="fs-4 text-light me-auto mt-auto mb-1 border-bottom border-3">System</div>
            {logoutButton}
          </div>
        </nav>
    );
  }
}

export default Navbar; // Don’t forget to use export default!
