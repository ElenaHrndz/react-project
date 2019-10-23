import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="App has-shadow">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            MyCompany
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

          <div className="navbar-end">
            <div className="navbar-item">
            <Link to='/' className="navbar-item">Home</Link>
            <Link to='/faq' className="navbar-item">Features</Link>
            <Link to='/faq' className="navbar-item">About</Link>
            <Link to='/faq' className="navbar-item">FAQ</Link>
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
