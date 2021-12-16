import React, { useEffect, useRef } from "react";

const Card = ({ progressTitle, progressPercent, progressMax }) => {
  const barRef = useRef();
  useEffect(() => {
    barRef.current.style.transition = "2s";
    barRef.current.style.maxWidth = `${progressPercent}%`;
    return () => {
      console.log('clean up');
    }
  });
  return(
    <div className="card card-img-holder mx-auto mx-lg-0" style={{background: 'linear-gradient(to right, #f1b90c, #a57e07)'}}>
      <div className="card-body px-3 py-2">
        <h3 className="text-white fs-5">{progressTitle}</h3>
        <hr className="mb-2 mt-2"/>
        <div>
          <div className="swap-label">
            Swap progress
          </div>
          <div className="progress">
            <div className="progress-ba" role="progressbar" aria-valuenow={progressPercent} aria-valuemin="0" aria-valuemax="100" ref={barRef}></div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-white">{progressPercent}%</span>
            <span className="rest-label">{parseFloat(progressMax) * (parseFloat(progressPercent)/100)}/{progressMax}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
