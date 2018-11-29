import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      types: []
    }
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/evolution-chain/1/').then(response => {
      //  how i get the description
      // uses characteristic in the api call
      // only has data 1-30.
      // add guard clause for this not to run if ID
      // is above 30
      // console.log(response.data.descriptions[1].description)
      //
      // how i get the national pokedex number
      // console.log(response.data.game_indices[0].game_index)
      //
      // how i get the name of the pokemon
      // console.log(response.data.name)
      //
      // how i get the sprites
      // console.log(response.data.sprites.front_default)
      // console.log(response.data.sprites.front_shiny)
      //
      // how i get my types
      // const types = response.data.types.map(item => item.type)
      // console.log(types)
      // this.setState({
      //   types: types
      //
      // })
      //
      //evolves
      // uses evolution-chain in api call
      //
      // finds 1st evolution aka 2nd tier
      //
      // console.log(response.data.chain.evolves_to[0].species.name)
      //
      // finds 2nd evolution aka 3th tier
      // console.log(response.data.chain.evolves_to[0].evolves_to[0].species.name)
      //
      // finds 3nd evolution aka 4th tier
      //
      // if (response.data.chain.evolves_to[0].evolves_to[0]) {
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
      console.log(response.data.chain.evolves_to[0])

      //
      // let chain = response.data.chain.evolves_to[0].check
      // let check = 'species'

      // if (chain.includes(check)) {
      //   Console.log('IT DOES')
      // }
    })
  }
  render() {
    return (
      <h1>
        Hello, World!
        {/* {this.state.types.map(type => (
          <p key={type.name}>{type.name}</p>
        ))} */}
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
