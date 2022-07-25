import React from "react";

class SupportButton extends React.Component {
  render() {

    return (
      <button className="btn position-fixed border-0 mb-3 me-4 bottom end-0 bottom-0 riseup" onClick={this.props.fn}><i className="bi fs-2 bi-chat-square-dots-fill text-white"></i></button>
    )
  }
}

export default SupportButton; // Don’t forget to use export default!               