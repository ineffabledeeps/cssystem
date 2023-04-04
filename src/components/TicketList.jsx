import React from "react";

class TicketList extends React.Component {


  // async getTickets(){
  //   return fetch("/messages/get", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(creds),
  //   }).then((response) => {
  //     //this.setState({ messages: response.body });
  //     return response.json();
  //   });
  // }

  render() {
    return (
      <table className="table border rounded text-center p-5 bg-white table-hover">
        <thead>
          <tr className="align-baseline">
            <th scope="col" className="">
              Ticket Number
            </th>
            <th scope="col">Creator</th>

            <th scope="col">Resolver</th>

            <th scope="col">
              CreatedOn<br></br>
              <i className="bi bi-caret-down-fill"></i>
            </th>
            <th scope="col" className="text-end">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <th scope="row" className="">
              1
            </th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button type="button" class="btn btn-primary float-end btn-sm">
                <i class="bi bi-telephone"></i> Connect
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row" className="">
              2
            </th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <button type="button" class="btn float-end btn-success btn-sm">
                <i class="bi bi-patch-check"></i> Resolved
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row" className="">
              3
            </th>
            <td>Larry the Bird</td>
            <td>19-25-24</td>
            <td>
              <button
                type="button"
                class="btn btn-warning float-end btn-sm text-truncate"
              >
                <i class="bi bi-check2-circle"></i> Mark as resolved
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default TicketList;
