import React from "react";
import PropTypes from "prop-types";
import Cardlist from "../cardlist/cardlist.jsx";
import Map from "../map/map.jsx";
import Citylist from "../citylist/citylist.jsx";
import {connect} from "react-redux";

class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  getCityList(cardOffers) {
    const cityList = Array.from(cardOffers, (x) => x.city);
    return Array.from(new Set(cityList));
  }

  render() {
    const {cardOffers, currentCity, cityOffers} = this.props;
    const cityMap = [52.3709553943508, 4.89309666406198];
    const iconUrlMap = `img/pin.svg`;
    const iconSizeMap = [30, 30];
    const zoomMap = 12;
    const offerCount = cityOffers.length;

    return (<div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Citylist cityList={this.getCityList(cardOffers)}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerCount} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                    Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <Cardlist cityOffers={cityOffers}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  cityMap={cityMap}
                  iconUrlMap={iconUrlMap}
                  iconSizeMap={iconSizeMap}
                  zoomMap={zoomMap}
                  cardOffers={cardOffers}
                  cityOffers={cityOffers}
                />;
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>);
  }
}

MainPage.propTypes = {
  cardOffers: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  cityOffers: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.city,
  cityOffers: state.cityOffers,
});

export {MainPage};

export default connect(mapStateToProps)(MainPage);
