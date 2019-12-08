import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Cardlist from "../cardlist/cardlist.jsx";
import Map from "../map/map.jsx";
import Citylist from "../citylist/citylist.jsx";
import {connect} from "react-redux";
import Filterlist from "../filterlist/filterlist.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {ActionCreator} from "../../reducer/userstate/userstate";
import {ActionCreator as ActionCreatorData} from "../../reducer/data/data";
import {getCity, getCityOffers} from "../../reducer/userstate/selectors";
import {getOffers} from "../../reducer/data/selectors";
import {createAPI} from "../../api";
import {getAuthData, getSignedIn} from "../../reducer/auth/selectors";

const CardlistWrapped = withActiveItem(Cardlist, `activeCard`, ActionCreator.changeActiveCard);
const CitylistWrapped = withActiveItem(Citylist, `city`, ActionCreator.changeCity);

class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  getCityList(cardOffers) {
    const cityList = Array.from(cardOffers, (x) => x.city.name);
    return Array.from(new Set(cityList));
  }
  componentDidMount() {
    createAPI().get(`/hotels`)
        .then((response) => {
          this.props.loadOffers(response.data);
        });
  }

  render() {
    const {cardOffers, currentCity, cityOffers, authData, signedIn} = this.props;
    const cityMap = [52.3709553943508, 4.89309666406198];
    const iconUrlMap = `img/pin.svg`;
    const iconActiveUrlMap = `img/pin-active.svg`;
    const iconSizeMap = [27, 39];
    const zoomMap = 12;


    return (
      (cardOffers.length === 0) ? `` : (<div className="page page--gray page--main">
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
                    {signedIn ?
                      (<Link to="/favorites" className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{authData.email}</span>
                      </Link>) : (
                        <Link to="/login" className="header__nav-link header__nav-link--profile">Sign In</Link>
                      ) }
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CitylistWrapped cityList={this.getCityList(cardOffers)}/>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {currentCity}</b>
                <Filterlist/>
                <CardlistWrapped cityOffers={cityOffers}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    cityMap={cityMap}
                    iconUrlMap={iconUrlMap}
                    iconActiveUrlMap={iconActiveUrlMap}
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
      </div>)
    );
  }
}

MainPage.propTypes = {
  cardOffers: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  cityOffers: PropTypes.array.isRequired,
  loadOffers: PropTypes.func.isRequired,
  authData: PropTypes.object.isRequired,
  signedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: getCity(state),
  cityOffers: getCityOffers(state),
  cardOffers: getOffers(state),
  authData: getAuthData(state),
  signedIn: getSignedIn(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadOffers: (offers) => dispatch(ActionCreatorData.loadOffers(offers))
});

export {MainPage};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
