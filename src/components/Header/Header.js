import React, {Component} from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggle: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render(){

  let menuActive = this.state.isToggleOn ? 'is-active' : '';
  
  return (
    <div>
      <nav className="navbar has-shadow">
        {/* <div className="container"> */}
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            MyCompany
          </a>
          {/* </div> */}

          <span className={'navbar-burger burger' + menuActive} onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </span>

        </div>

        <div className="navbar-end">
          <div className={'navbar-menu' + menuActive}>
            <Link to='/' className="navbar-item r-item">Home</Link>
            <Link to='/faq' className="navbar-item r-item">Features</Link>
            <Link to='/faq' className="navbar-item r-item">About</Link>
            <Link to='/faq' className="navbar-item r-item">FAQ</Link>
          </div>
          <div className="buttons">
            <a className="button is-primary is-outlined">
              <strong>Join Now</strong>
            </a>
          </div>
        </div>
      </nav>
    </div>);
  }
}

export default Header;