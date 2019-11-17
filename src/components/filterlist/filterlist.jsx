import React from "react";
import {ActionCreator, FilterType} from "../../reducer";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Filterlist extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  handleClickHeader() {
    this.setState({active: !this.state.active});
  }
  handleClickItem(filterType) {
    this.setState({active: false});
    this.props.changeFilterType(filterType);
  }

  render() {
    const {active} = this.state;
    const {currentFilter} = this.props;
    const dropdownClass = active ? `places__options--opened` : ``;

    const filters = [
      {value: `Popular`, filterType: FilterType.POPULAR},
      {value: `Price: low to high`, filterType: FilterType.PRICE_ASC},
      {value: `Price: high to low`, filterType: FilterType.PRICE_DESC},
      {value: `Top rated first`, filterType: FilterType.TOP}
    ];


    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.handleClickHeader.bind(this)}>
          {
            filters.find((filter) => {
              return filter.filterType === currentFilter;
            }).value
          }
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${dropdownClass}`}>
          {filters.map((filter, i) => (
            <li
              className={`places__option ${
                currentFilter === filter.filterType ? `places__option--active` : ``
              }`}
              key={`filter` + i}
              tabIndex="0"
              onClick={() => {
                this.handleClickItem(filter.filterType);
              }}
            >
              {filter.value}
            </li>
          ))}
        </ul>
      </form>);
  }
}

Filterlist.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  changeFilterType: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentFilter: state.cityFilterType,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilterType: (city) => dispatch(ActionCreator.changeFilterType(city))
});

export {Filterlist};

export default connect(mapStateToProps, mapDispatchToProps)(Filterlist);
