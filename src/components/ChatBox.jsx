import React from "react";
import logo from "../logo.svg"
class ChatBox extends React.Component {
  render() {
    return (
      <div className="position-absolute bottom-0 end-0 mb-3 me-3">
        <div className="card text-center" style={{ width: '20rem', height: '25rem' }}>
          <div className="card-header p-2 border-0">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img src={logo} className="bg-dark rounded p-1" style={{ height: "30px", width: "30px" }}></img>
                <span className="fs-5 ms-2 fw-light">Customer support</span>
              </div>
              <div class="btn border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></div>
              <ul class="dropdown-menu px-2">
                <li><a class="dropdown-item rounded" onClick={this.props.fn}>Exit</a></li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            {/* <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <div className="d-flex flex-column">
            <div><span class="bg-lightblue p-1 px-2 float-start rounded">hello</span></div>
            <div><span class="bg-primary text-light p-1 px-2 rounded float-end">hello</span></div>
            </div>
          </div>
          <div className="card-footer p-2 border-0 text-muted">
            <div className="d-flex justify-content-between align-items-center">

              <input type="text" className="form-control border-0 bg-lightblue" placeholder="Ask Something!" aria-label="Username" aria-describedby="basic-addon1"></input>
              <div className="btn border-0"><i className="bi bi-send"></i></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBox; // Don’t forget to use export default!