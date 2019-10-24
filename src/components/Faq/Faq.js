import React, { Component } from 'react';
import './Faq.css';
import axios from 'axios';
import HighlighterItem from '../HighlighterItem/HighlighterItem';

class Faq extends Component {

    constructor(props) {
        super(props);

        this.state = {
            faqs: []
        };
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const faqs = res.data.slice(0,10);
                this.setState({ faqs });
            })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <section className="section">
                        <h1 className="title">FAQ</h1>
                        <h2 className="subtitle is-4">Lorum ipsum and all of that jazz.</h2>

                        
                        <div className="columns">
                            {this.state.faqs.map(faq =>
                                < HighlighterItem title={faq.title} subtitle={faq.body} />
                            )}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Faq;