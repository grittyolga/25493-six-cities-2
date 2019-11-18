import React from "react";
import Card from "../card/card.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

class Cardlist extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  handleHover(card) {
    this.props.changeActiveCard(card);
  }
  handleMouseOut() {
    this.props.changeActiveCard(-1);
  }
  handleClick() {
    window.location = `/details/${this.props.activeCard}`;
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
            onHover={this.handleHover.bind(this)}
            onMouseOut={this.handleMouseOut.bind(this)}
          />
        ))}
      </div>);
  }
}

Cardlist.propTypes = {
  cityOffers: PropTypes.array.isRequired,
  activeCard: PropTypes.number.isRequired,
  changeActiveCard: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCard: state.activeCard,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard: (activeCard) => dispatch(ActionCreator.changeActiveCard(activeCard))
});


export {Cardlist};

export default connect(mapStateToProps, mapDispatchToProps)(Cardlist);
