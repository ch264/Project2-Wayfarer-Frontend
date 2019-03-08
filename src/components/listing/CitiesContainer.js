import React, { Component } from 'react'
import City from './City';
import { Segment } from 'semantic-ui-react'


export default class CitiesContainer extends Component {
  render() {
    let cityComponents = this.props.cities.map((city, index) => {
      return(
        <City displayListing={this.props.displayListing}
            city={city} key={index}/>
      )
    })

    return (
      <div>
        <Segment.Group raised>
          <Segment>
            <h1>Cities</h1>
            {cityComponents}
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}
