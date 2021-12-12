import React from "react";

const Card = () => (
  <div className="card card-img-holder mx-auto mx-lg-0" style={{background: 'linear-gradient(to right, #f1b90c, #a57e07)'}}>
    <div className="card-body px-3 py-2">
      <h3 className="text-white fs-5">First come first served (1 BNB = 25,440 METAV)</h3>
      <hr className="mb-2 mt-2"/>
      <div>
        <div className="swap-label">
          Swap progress
        </div>
        <div className="progress">
          <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '96.68%'}}></div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-white">96.68%</span>
          <span className="rest-label">2610.40/2700</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
