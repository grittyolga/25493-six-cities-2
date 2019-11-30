import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MainPage from "../mainpage/mainpage.jsx";
import DetailPage from "../detailpage/detailpage.jsx";
import {getOffers} from "../../reducer/data/selectors";


class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  getPageScreen() {
    const {cardOffers} = this.props;
    if (location.pathname === `/`) {
      return <MainPage cardOffers={cardOffers} />;
    } else if (location.pathname.startsWith(`/details`)) {
      return <DetailPage card={cardOffers[0]} />;
    } else {
      return null;
    }
  }
  render() {
    return <React.Fragment>{this.getPageScreen()}</React.Fragment>;
  }
}

App.propTypes = {
  cardOffers: PropTypes.array.isRequired
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cardOffers: getOffers(state),
});

export {App};

export default connect(mapStateToProps)(App);
