import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getAuthorizationStatus} from "../../reducer/auth/selectors";
import SignIn from "../../components/signin/signin.jsx";

const withAuth = (Component) => {
  class WithAuth extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      if (this.props.isAuthorizationRequired) {
        return <SignIn />;
      }
      return <Component
        {...this.props}
      />;
    }
  }

  WithAuth.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired
  };

  const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    isAuthorizationRequired: getAuthorizationStatus(state),
  });

  return connect(mapStateToProps)(WithAuth);
};


export default withAuth;
