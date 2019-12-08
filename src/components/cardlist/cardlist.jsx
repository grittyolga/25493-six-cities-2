import React from "react";
import Card from "../card/card.jsx";
import PropTypes from "prop-types";
import {createAPI} from "../../api";
import {ActionCreator as ActionCreatorData} from "../../reducer/data/data";
import {connect} from "react-redux";

class Cardlist extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handleClick() {
    window.location = `/details/${this.props.activeItem}`;
  }
  handleBookmark(id, bookmark) {
    createAPI().post(`/favorite/${id}/${bookmark ? 0 : 1}`)
      .then((response) => {
        this.props.updateOfferFavorite(response.data);
        this.forceUpdate();
      });
  }

  render() {
    const {cityOffers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {cityOffers.map((card, i) => (
          <Card
            key={`card` + i}
            onClick={this.handleClick.bind(this)}
            index={i}
            id={card.id}
            name={card.title}
            premium={card.is_premium}
            image={card.images[0]}
            price={card.price}
            bookmark={card.is_favorite}
            rating={card.rating}
            type={card.type}
            onHover={this.props.onActivateItem}
            onMouseOut={this.props.onDeactivateItem}
            onBookmark={this.handleBookmark.bind(this)}
          />
        ))}
      </div>);
  }
}

Cardlist.propTypes = {
  cityOffers: PropTypes.array.isRequired,
  activeItem: PropTypes.number.isRequired,
  onDeactivateItem: PropTypes.func.isRequired,
  onActivateItem: PropTypes.func.isRequired,
  updateOfferFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
});

const mapDispatchToProps = (dispatch) => ({
  updateOfferFavorite: (offer) => dispatch(ActionCreatorData.updateOfferFavorite(offer))
});

export {Cardlist};

export default connect(mapStateToProps, mapDispatchToProps)(Cardlist);
