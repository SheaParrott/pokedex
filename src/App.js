import React, { Component } from 'react'
import axios from 'axios'
import { runInThisContext } from 'vm'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemonURL: 'https://pokeapi.co/api/v2/pokemon/1/',
      types: [],
      pokemonNumber: '',
      pokemonName: '',
      pokemonSprite: '',
      pokemonShinySprite: '',
      pokemonImage: '',
      pokemonHeight: '',
      pokemonWeight: '',
      pokemonEvolutions: [],
      completePokemonList: []
    }
  }

  componentDidMount = () => {
    this.collectPokemon()
  }

  collectPokemon = () => {
    axios.get(this.state.pokemonURL).then(response => {
      const pokemonWeightHgToLb = response.data.weight * 0.22046226
      const roundedPokemonWeight = Math.round(pokemonWeightHgToLb * 10) / 10

      const pokemonHeightDcToFt = response.data.height / 3.048
      const roundedPokemonHeight = Math.round(pokemonHeightDcToFt * 10) / 10

      const types = response.data.types.map(item => item.type)
      this.setState({
        pokemonNumber: response.data.game_indices[0].game_index,
        pokemonName: response.data.name,
        pokemonSprite: response.data.sprites.front_default,
        pokemonShinySprite: response.data.sprites.front_shiny,
        pokemonImage: response.data.sprites.front_default,
        types: types,
        pokemonHeight: roundedPokemonHeight,
        pokemonWeight: roundedPokemonWeight
      })
    })

    axios.get('https://pokeapi.co/api/v2/pokemon/').then(response => {
      this.setState({
        completePokemonList: response.data.results.slice(0, 386)
      })
    })
  }

  changeImageWhenClicked = () => {
    if (this.state.pokemonShinySprite === '') {
      return
    }
    if (this.state.pokemonImage === this.state.pokemonSprite) {
      this.setState({
        pokemonImage: this.state.pokemonShinySprite
      })
    }
    if (this.state.pokemonImage === this.state.pokemonShinySprite) {
      this.setState({
        pokemonImage: this.state.pokemonSprite
      })
    }
  }
  updatePokemon = event => {
    this.setState(
      {
        pokemonURL: event.target.value
      },
      () => {
        this.collectPokemon()
      }
    )
  }

  render() {
    return (
      <h1>
        <div id="pokedex">
          <div id="left">
            <div id="logo" />
            <div id="bg_curve1_left" />
            <div id="bg_curve2_left" />
            <div id="curve1_left">
              <div id="buttonGlass">
                <div id="reflect"> </div>
              </div>
              <div id="miniButtonGlass1" />
              <div id="miniButtonGlass2" />
              <div id="miniButtonGlass3" />
            </div>
            <div id="curve2_left">
              <div id="junction">
                <div id="junction1" />
                <div id="junction2" />
              </div>
            </div>
            <div id="screen">
              <div id="topPicture">
                <div id="buttontopPicture1" />
                <div id="buttontopPicture2" />
              </div>
              <div id="picture">
                #{this.state.pokemonNumber}
                <img
                  onClick={this.changeImageWhenClicked}
                  className="picturePokemon"
                  src={this.state.pokemonImage}
                  alt={this.state.pokemonName}
                />
              </div>
              <div id="buttonbottomPicture" />
              <div id="speakers">
                <div className="sp" />
                <div className="sp" />
                <div className="sp" />
                <div className="sp" />
              </div>
            </div>
            <div id="bigbluebutton" />
            <div id="barbutton1" />
            <div id="barbutton2" />
            <div id="cross">
              <div id="leftcross">
                <div id="leftT" />
              </div>
              <div id="topcross">
                <div id="upT" />
              </div>
              <div id="rightcross">
                <div id="rightT" />
              </div>
              <div id="midcross">
                <div id="midCircle" />
              </div>
              <div id="botcross">
                <div id="downT" />
              </div>
            </div>
          </div>
          <div id="right">
            <div id="stats">
              <strong>Name :</strong> {this.state.pokemonName}
              <br />
              <strong>Type :</strong>{' '}
              {this.state.types.map(type => (
                <strong key={type.name}>{type.name} </strong>
              ))}
              <br />
              <strong>Height :</strong> {this.state.pokemonHeight}'
              <br />
              <strong>Weight :</strong> {this.state.pokemonWeight} lbs
              <br />
              <br />
              <strong>Pokedex message :</strong> press image to see shiny
            </div>
            <div id="blueButtons1">
              <div className="blueButton" />
              <div className="blueButton" />
              <div className="blueButton" />
              <div className="blueButton" />
              <div className="blueButton" />
            </div>
            <div id="blueButtons2">
              <div className="blueButton" />
              <div className="blueButton" />
              <div className="blueButton" />
              <div className="blueButton" />
              <div className="blueButton" />
            </div>
            <div id="miniButtonGlass4" />
            <div id="miniButtonGlass5" />
            <div id="barbutton3" />
            <div id="barbutton4" />
            <div>
              <select onChange={this.updatePokemon} id="yellowBox1">
                {this.state.completePokemonList.map(newPokemon => {
                  return (
                    <option key={newPokemon.name} value={newPokemon.url}>
                      {newPokemon.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <div id="yellowBox2" />
            <div id="bg_curve1_right" />
            <div id="bg_curve2_right" />
            <div id="curve1_right" />
            <div id="curve2_right" />
          </div>
        </div>
      </h1>
    )
  }
}

export default App
