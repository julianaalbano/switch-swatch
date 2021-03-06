import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleColor } from '../store/colors';
import { Link } from 'react-router-dom';

export class SingleColor extends React.Component {
  componentDidMount() {
    this.props.fetchSingleColor(this.props.match.params.hexName);
  }

  render() {
    const { singleColor } = this.props.singleColor;
    return (
      <div id="span-page">
        <div id="single-view-container">
          <div>
            <h1 style={{ backgroundColor: `${singleColor.hexCode}` }} />
          </div>
          <div>
            <p>{singleColor.hexCode}</p>
          </div>
        </div>
        <div className="wrapper">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button type="button" className="pointer-cursor">
              Clear
            </button>
          </Link>
        </div>
        <br />
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleColor);
