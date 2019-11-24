import React from "react";
import PropTypes from "prop-types";

class Citylist extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {cityList, activeItem, onActivateItem} = this.props;

    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityList.map((city, i) => (
            <li className="locations__item" key={`city` + i}>
              <a
                className={`locations__item-link tabs__item ${
                  city === activeItem ? `tabs__item--active` : ``
                }`}
                href="#"
                onClick={(event)=> {
                  event.preventDefault();
                  onActivateItem(city);
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>);
  }
}

Citylist.propTypes = {
  cityList: PropTypes.array.isRequired,
  activeItem: PropTypes.string.isRequired,
  onDeactivateItem: PropTypes.func.isRequired,
  onActivateItem: PropTypes.func.isRequired
};

export {Citylist};

export default Citylist;
