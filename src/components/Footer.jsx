import React from "react";

const Tabs = () => (
  <div className="pp-footer">
    <div className="container">
      <div className="d-flex justify-content-between">
        <div className="text-muted">
          Copyright © 2021. All Rights Reserved by MetaVPad
        </div>
        <div className="text-muted"> v1.2.9</div>
        <div className="text-end pp-footer-link">
          <a
            href="https://bscpad.com/privacy-policy"
            target="_blank"
            className="back-top"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="https://bscpad.com/terms-of-use"
            target="_blank"
            className="back-top"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Tabs;
