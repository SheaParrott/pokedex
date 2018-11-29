import React, { Component } from 'react'
import axios from 'axios'
import { runInThisContext } from 'vm'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/149/').then(response => {
      // how i get the national pokedex number
      // console.log(response.data.game_indices[0].game_index)
      // how i get the name of the pokemon
      // console.log(response.data.name)
      // how i get the sprites
      // console.log(response.data.sprites.front_default)
      // console.log(response.data.sprites.front_shiny)
      // how to found the height
      // console.log(response.data.height)
      // how i found the weight
      // console.log(response.data.weight)
      // how i get my types
      // console.log(response.data.types)

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
    axios.get('https://pokeapi.co/api/v2/pokemon//').then(response => {
      console.log(response.data.results)
      this.setState({
        completePokemonList: response.data.results
      })
    })
    // axios
    //   .get('https://pokeapi.co/api/v2/evolution-chain/40/')
    //   .then(response => {
    //
    //evolves
    // uses evolution-chain in api call
    //
    // if (response.data.chain.evolves_to[0].species.name) {
    //   console.log(response.data.chain.evolves_to[0].species.name)
    // }
    // if (response.data.chain.evolves_to[0].evolves_to[0].species.name) {
    //   console.log(
    //     response.data.chain.evolves_to[0].evolves_to[0].species.name
    //   )
    // }
    //
    // code above works for up to 3 evolutions
    // unless i write 12 of these this wont work well
    // // forgot eevee has like 12 evolutions
    //
    // // need some sort of for loop to add .evolves_to[0] if
    // // the array includes .evolves_to[0]
    //
    // console.log(response.data.chain.evolves_to[0])
    //
    // let chain = response.data.chain.evolves_to[0].check
    // let check = 'species'
    // if (chain.includes(check)) {
    //   Console.log('IT DOES')
    // }
    // })
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
    console.log('change')
    console.log(event.target.dataset.url)
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
              <strong>Weight :</strong> {this.state.pokemonHeight} lbs
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
                    <option key={newPokemon.name} data-url={newPokemon.url}>
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
//
// (condition) ? false : true
// same as above
// !(condition)
//

export default App
