import RequestList from "../components/RequestList";
import TicketList from "../components/TicketList";

export default function DashboardPage() {
  return (
    <div className="container-fluid bg-light full-height pt-5">
      <div className="container-xxl mt-5">
        <div class="row">
          <div class="col">
            <TicketList/>
          </div>
          <div class="col-lg-3">
            <RequestList/>
          </div>
        </div>
      </div>
    </div>
  );
}