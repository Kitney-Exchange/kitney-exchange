import React, { Component } from "react";

class AutoCompleteMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: null,
      newCityInfo: [],
      newLocationInfo: {}
    };
    this.renderAutoComplete = this.renderAutoComplete.bind(this);
  }

  componentDidMount() {
    this.renderAutoComplete();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps.map) this.renderAutoComplete();
  }

  onSubmit(e) {
    e.preventDefault();
  }

  //// Handle user input for location and autosuggest && Trigger map to render to new location ////
  renderAutoComplete() {
    const { google, map } = this.props;

    if (!google || !map) return;

    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
    autocomplete.bindTo("bounds", map);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace(); 

      this.setState({ newCityInfo: autocomplete.getPlace().formatted_address }) //// store user input new city into local state ////
      
      if (!place.geometry) {
        return;
      }

      if (place.geometry.viewport) 
        map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
      this.setState({ position: place.geometry.location });

      //// Set lat && lng of new city into local state ////
      this.state.newLocationInfo = Object.create({}, 
        { lat: { value: place.geometry.location.lat() }, 
          lng: { value: place.geometry.location.lng() } });
    });
  }

  handleSubmitNewInfo() {
    console.log('this.state', this.state);
  }

  render() {
    return (
      <div style={ { marginLeft: "500px" } }>
        <div>
          <form onSubmit={ this.onSubmit }>
            <input
              placeholder="Enter a location"
              ref={ ref => (this.autocomplete = ref) }
              type="text"
            />
            <input type="submit" value="Go" 
                    onClick={ () => this.handleSubmitNewInfo() }
            />
          </form>

          <div>
            <div>Lat: { this.state.position && this.state.position.lat() }</div>
            <div>Lng: { this.state.position && this.state.position.lng() }</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AutoCompleteMap;
