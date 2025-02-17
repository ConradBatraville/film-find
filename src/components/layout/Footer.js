import React from "react";

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-2 mt-4 text-center bg-light text-light">
            <h5 className="text-dark">Created by: </h5>
            <a
              className="text-warning font-weight-normal"
              href="https://github.com/ConradBatraville"
            >
              Conrad Batraville
            </a>
            <a href="https://www.linkedin.com/in/conradbatraville/">
              <i className="fab fa-linkedin fa-1x" id="react-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
