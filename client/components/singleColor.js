import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleColor, fetchSingleCategory } from '../store/colors';
import { Link } from 'react-router-dom';

export class SingleColor extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchSingleColor(this.props.match.params.hexName);
  }

  render() {
    const { singleColor } = this.props.singleColor;
    return (
      <div>
        <h1>Made it to your SingleColor component!</h1>
        <div>
          <p>Your beautiful selection</p>
          <div style={{ backgroundColor: `${singleColor.hexCode}` }}>
            {singleColor.hexCode}
          </div>
        </div>
        <Link to="/colors">
          <button type="button">Back to all colors</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    singleColor: state.colors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSingleColor: function(id) {
      dispatch(fetchSingleColor(id));
    },
    fetchSingleCategory: function(id) {
      dispatch(fetchSingleCategory(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleColor);
