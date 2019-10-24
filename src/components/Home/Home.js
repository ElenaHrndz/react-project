import React, { Component } from 'react';
import './Home.css';
import Highlighter from '../Highlighter/Highlighter';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Soaring to new heights",
      subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      hightlights: [
        {
          title: "I think it's an absolutely excellent tool for our business. I can't survive without this thing.",
          subtitle: "- Gary Simon"
        },
        {
          title: "I think it's an absolutely excellent tool for our business. I can't survive without this thing.",
          subtitle: "- Gary Simon"
        },
        {
          title: "I think it's an absolutely excellent tool for our business. I can't survive without this thing.",
          subtitle: "- Gary Simon"
        },
        {
          title: "I think it's an absolutely excellent tool for our business. I can't survive without this thing.",
          subtitle: "- Gary Simon"
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
              <div className="container">
              <h1 className="title">{ this.state.heading }</h1>
              <div className="is-two-thirds column is-paddingless">
                  <h2 className="subtitle is-4">{ this.state.subheading }</h2>
              </div>
              <a className="button is-large is-primary" id="learn">Learn more</a>
              </div>
          </div>
        </section>


        <section className="section">
          <div className="container">
            <div className="columns pd is-desktop">
              <div className="column is-1 has-text-centered">
                <i className="fa fa-cog is-primary"></i>
              </div>
              <div className="column is-one-third-desktop">
                <p className="title"><strong>We provide superior logistics so that your business can succeed in a crazy world.</strong></p>
              </div>
              <div className="column">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>
          
          <Highlighter hightlights={this.state.hightlights}/>
          <Highlighter hightlights={this.state.hightlights}/>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
