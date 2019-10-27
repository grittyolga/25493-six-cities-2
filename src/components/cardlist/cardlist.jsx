import React from "react";
import Card from "../card/card.jsx";
import PropTypes from "prop-types";

class Cardlist extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1
    };
  }
  handleHover(card) {
    this.setState({activeCard: card});
  }

  render() {
    const {cardOffers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {cardOffers.map((card, i) => (
          <Card
            key={`card` + i}
            onClick={() => {}}
            id={i}
            name={card.name}
            mark={card.mark}
            image={card.image}
            price={card.price}
            bookmark={card.bookmark}
            rating={card.rating}
            type={card.type}
            onHover={this.handleHover.bind(this)}
          />
        ))}
      </div>);
  }
}

Cardlist.propTypes = {
  cardOffers: PropTypes.array.isRequired,
};

export default Cardlist;
