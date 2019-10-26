import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from '../PokemonCard/PokemonCard';

class Pokemon extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //pokemons array
            pokemons: []
        };
    }

    componentDidMount() {
        axios.get('https://pokemondata-b60b0.firebaseio.com/pokemon.json')
            .then(res => {
                const pokemons = res.data.slice();
                this.setState({ pokemons });
            })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <section className="section">
                        <h1 className="title">Pokemon world</h1>
                        <h2 className="subtitle is-4">Find your pokemon</h2>
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-info">
                                {this.state.pokemons.map(pokemon =>
                                //return datasail for each pokemon on pokeons object
                                    < PokemonCard title={pokemon.name} subtitle={pokemon.num} image={pokemon.img} type={pokemon.type} weaknesses={pokemon.weaknesses}/>
                                )}
                                </article>
                            </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Pokemon;