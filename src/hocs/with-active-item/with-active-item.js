import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const withActiveItem = (Component, stateField, dispatchFunc) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    onDeactivateItem() {
      this.props.changeActiveItem(-1);
    }
    onActivateItem(activeItem) {
      this.props.changeActiveItem(activeItem);
    }

    render() {
      return <Component
        {...this.props}
        onDeactivateItem={this.onDeactivateItem.bind(this)}
        onActivateItem={this.onActivateItem.bind(this)}
      />;
    }
  }

  WithActiveItem.propTypes = {
    changeActiveItem: PropTypes.func.isRequired
  };

  const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    activeItem: state[stateField]
  });

  const mapDispatchToProps = (dispatch) => ({
    changeActiveItem: (activeItem) => dispatch(dispatchFunc(activeItem))
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithActiveItem);
};


export default withActiveItem;
