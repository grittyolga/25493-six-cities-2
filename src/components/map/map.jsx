import React, {createRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from "react-redux";
import {getActiveCard} from "../../reducer/userstate/selectors";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = createRef();

  }
  componentDidMount() {
    const mapRef = this.mapRef.current;
    const {
      cityMap,
      iconUrlMap,
      iconActiveUrlMap,
      iconSizeMap,
      zoomMap,
      cityOffers
    } = this.props;

    const map = leaflet.map(mapRef, {
      center: cityMap,
      zoom: zoomMap,
      zoomControl: false,
      marker: true
    });

    map.setView(cityMap, zoomMap);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this.icon = leaflet.icon({
      iconUrl: iconUrlMap,
      iconSize: iconSizeMap
    });

    this.iconActive = leaflet.icon({
      iconUrl: iconActiveUrlMap,
      iconSize: iconSizeMap
    });

    this.markersLayer = leaflet.layerGroup().addTo(map);

    cityOffers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {icon: this.icon})
        .addTo(map);
    });
  }

  componentDidUpdate() {
    const {cityOffers, activeCard} = this.props;
    this.markersLayer.clearLayers();
    cityOffers.forEach((offer, i) => {
      leaflet
         .marker(offer.coordinates, {icon: i === activeCard ? this.iconActive : this.icon})
         .addTo(this.markersLayer);
    });
  }

  render() {

    const mapStyle = {
      width: `100%`,
      height: `100%`,
    };

    return (<div id="map" ref={this.mapRef} style={mapStyle}></div>);
  }

}
Map.propTypes = {
  cityMap: PropTypes.array,
  iconUrlMap: PropTypes.string,
  iconActiveUrlMap: PropTypes.string,
  iconSizeMap: PropTypes.array,
  zoomMap: PropTypes.number,
  cardOffers: PropTypes.array.isRequired,
  cityOffers: PropTypes.array.isRequired,
  activeCard: PropTypes.number.isRequired,
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCard: getActiveCard(state),
});
export {Map};

export default connect(mapStateToProps)(Map);
