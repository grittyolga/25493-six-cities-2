import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    const {
      city = [52.3709553943508, 4.89309666406198],
      iconUrl = `img/pin.svg`,
      iconSize = [30, 30],
      zoom = 12,
      cardOffers
    } = this.props;

    this.city = city;
    this.iconUrl = iconUrl;
    this.zoom = zoom;
    this.cardOffers = cardOffers;
    this.iconSize = iconSize;


    const mapStyle = {
      width: `100%`,
      height: `100%`,
    };
    this.mapStyle = mapStyle;
  }
  componentDidMount() {
    this.map = leaflet.map(`map`, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(this.city, this.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.icon = leaflet.icon({
      iconUrl: this.iconUrl,
      iconSize: this.iconSize
    });

    this.cardOffers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, this.icon)
        .addTo(this.map);
    });
  }
  render() {
    return (<div id="map" style={this.mapStyle}></div>);
  }

}
Map.propTypes = {
  city: PropTypes.array,
  iconUrl: PropTypes.string,
  iconSize: PropTypes.array,
  zoom: PropTypes.number,
  cardOffers: PropTypes.array.isRequired
};

export default Map;
