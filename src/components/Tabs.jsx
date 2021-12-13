import React from 'react';

const Tabs = () => (
  <div className="tabs px-2">
    <div className="container">
      <div className="justify-content-center">
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-item text-muted active" id="project-details-tab" data-bs-toggle="tab" data-bs-target="#project-details" type="button" role="tab" aria-controls="project-details" aria-selected="true">
            Project Details
          </button>
          <button className="nav-item text-muted" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule" type="button" role="tab" aria-controls="schedule" aria-selected="false">
            Schedule
          </button>
          <button className="nav-item text-muted" id="allocation-tab" data-bs-toggle="tab" data-bs-target="#allocation" type="button" role="tab" aria-controls="allocation" aria-selected="false">
            Your Allocation
          </button>
        </div>
        <div className="tab-content py-2" id="nav-tab">
          <div className="tab-pane fade show active" id="project-details" role="tabpanel" aria-labelledby="project-details-tab">
            <div className="row">
              <div className="col-md-7">
                <table className="text-white">
                  <thead>
                    <tr>
                      <th colSpan={2}>Pool information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Opens</th>
                      <td>2021-11-22 10:00:00 UTC</td>
                    </tr>
                    <tr>
                      <th scope="row">FCFS Opens</th>
                      <td>2022-11-22 12:00:00 UTC</td>
                    </tr>
                    <tr>
                      <th scope="row">Closes</th>
                      <td>2021-11-22 14:00:00 UTC</td>
                    </tr>
                    <tr>
                      <th scope="row">Swap Rate</th>
                      <td>1 BNB = 25440.0000</td>
                    </tr>
                    <tr>
                      <th scope="row">Cap</th>
                      <td>2700 BNB</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Users Participated</th>
                      <td>1047</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-5">
                <table className="text-white">
                  <thead>
                    <tr>
                      <th colSpan={2}>Token information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Name</th>
                      <td>MetaVPade</td>
                    </tr>
                    <tr>
                      <th scope="row">Token Symbol</th>
                      <td>METAV</td>
                    </tr>
                    <tr>
                      <th scope="row">Token Supply</th>
                      <td>80000000</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="schedule" role="tabpanel" aria-labelledby="schedule-tab">
            <table className="text-white">
              <thead>
                <tr>
                  <th>Round</th>
                  <th>Opens</th>
                  <th>Closes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Allocation</td>
                  <td>2021-11-22 10:00:00 UTC</td>
                  <td>2022-11-22 12:00:00 UTC</td>
                </tr>
                <tr>
                  <td>FCFS-Prepare</td>
                  <td>2022-11-22 12:00:00 UTC</td>
                  <td>2021-11-22 14:00:00 UTC</td>
                </tr>
                <tr>
                  <td>FCFS-Start</td>
                  <td>2022-11-22 12:00:00 UTC</td>
                  <td>2021-11-22 14:00:00 UTC</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tab-pane fade" id="allocation" role="tabpanel" aria-labelledby="allocation-tab">
            <table className="text-white">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Token Allocation</th>
                  <th>Date</th>
                  <th>Token(s) Claimed</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                </tr>
                <tr>
                </tr>
                <tr>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tabs;

