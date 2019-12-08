import React from "react";
import PropTypes from "prop-types";

class Card extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  handleBookmark() {
    const {id, bookmark, onBookmark} = this.props;
    onBookmark(id, bookmark);
  }

  render() {

    const {
      index,
      name,
      premium,
      image,
      price,
      bookmark,
      rating,
      type,
      onClick,
      onHover,
      onMouseOut
    } = this.props;

    return (
      <article
        className="cities__place-card place-card"
        onMouseOver={() => {
          onHover(index);
        }}
        onMouseOut={() => {
          onMouseOut();
        }}

      >
        {premium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#" onClick={onClick}>
            <img
              className="place-card__image"
              src={image}
              width="260"
              height="200"
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button${
                bookmark ? `--active` : ``
              } button`}
              type="button"
              onClick={this.handleBookmark.bind(this)}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: {rating} + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#" onClick={onClick}>
              {name}
            </a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  premium: PropTypes.bool,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bookmark: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  onBookmark: PropTypes.func.isRequired
};


export default Card;
