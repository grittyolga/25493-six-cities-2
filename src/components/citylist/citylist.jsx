import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

class Citylist extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {cityList, currentCity, changeCity} = this.props;

    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityList.map((city, i) => (
            <li className="locations__item" key={`city` + i}>
              <a
                className={`locations__item-link tabs__item ${
                  city === currentCity ? `tabs__item--active` : ``
                }`}
                href="#"
                onClick={(event)=> {
                  event.preventDefault();
                  changeCity(city);
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
  currentCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export {Citylist};

export default connect(mapStateToProps, mapDispatchToProps)(Citylist);
