import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { fetchSingleColor } from '../store/colors';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
  handleClick = () => {
    let randomNum = Math.floor(Math.random() * 104) + 1;
    this.props.history.push(`/colors/${randomNum}`);
    this.props.fetchSingleColor(randomNum);
  };

  render() {
    return (
      <div id="sidebar-container">
        <button type="button" id="random-button" onClick={this.handleClick}>
          Random Color
        </button>
        <div id="sidebar-colors">
          <div className="sidebar-color-links">
            <Link to="/red">Red</Link>
          </div>
          <div className="sidebar-color-links">
            <Link to="/orange">Orange</Link>
          </div>
          <div className="sidebar-color-links">
            <Link to="/yellow">Yellow</Link>
          </div>
          <div className="sidebar-color-links">
            <Link to="/green">Green</Link>
          </div>
          <div className="sidebar-color-links">
            <Link to="/blue">Blue</Link>
          </div>
          <div className="sidebar-color-links">
            <Link to="/purple">Purple</Link>
          </div>
          <div className="sidebar-color-links">
            <Link to="/brown">Brown</Link>
          </div>
          <div className="sidebar-color-links">
            <Link to="/gray">Gray</Link>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSingleColor: function(id) {
      dispatch(fetchSingleColor(id));
    },
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Sidebar)
);
