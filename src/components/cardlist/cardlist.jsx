import React from "react";
import Card from "../card/card.jsx";
import PropTypes from "prop-types";

class Cardlist extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handleClick() {
    window.location = `/details/${this.props.activeItem}`;
  }

  render() {
    const {cityOffers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {cityOffers.map((card, i) => (
          <Card
            key={`card` + i}
            onClick={this.handleClick.bind(this)}
            id={i}
            name={card.name}
            mark={card.mark}
            image={card.image}
            price={card.price}
            bookmark={card.bookmark}
            rating={card.rating}
            type={card.type}
            onHover={this.props.onActivateItem}
            onMouseOut={this.props.onDeactivateItem}
          />
        ))}
      </div>);
  }
}

Cardlist.propTypes = {
  cityOffers: PropTypes.array.isRequired,
  activeItem: PropTypes.number.isRequired,
  onDeactivateItem: PropTypes.func.isRequired,
  onActivateItem: PropTypes.func.isRequired
};

export {Cardlist};

export default Cardlist;
