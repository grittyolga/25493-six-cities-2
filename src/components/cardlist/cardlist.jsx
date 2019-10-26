import React from "react";
import Card from "../card/card.jsx";
import PropTypes from "prop-types";

const Cardlist = (props) => {
  const {cardOffers} = props;
  return <div className="cities__places-list places__list tabs__content">
    {cardOffers.map((card, i) => <Card key={name + i} onClick={()=>{}} name = {card.name} mark = {card.mark} image = {card.image} price = {card.price} bookmark = {card.bookmark} rating = {card.rating} type = {card.type} onHover={()=>{}}/>)}
  </div>;
};

Cardlist.propTypes = {
  cardOffers: PropTypes.array.isRequired,
};

export default Cardlist;
