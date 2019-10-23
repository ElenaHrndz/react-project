import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer ">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>Footer</p>
            </div>
            <div className="column has-text-right">
              <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
              <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
