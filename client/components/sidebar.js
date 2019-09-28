import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchSingleColor, fetchSingleCategory } from '../store/colors';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
  handleClickRandom = () => {
    let randomNum = Math.floor(Math.random() * 104) + 1;
    this.props.history.push(`/colors/${randomNum}`);
    this.props.fetchSingleColor(randomNum);
  };

  handleClickCategory = async () => {
    let name = event.target.name;
    this.props.history.push(`/${name}`);
    await this.props.fetchSingleCategory(name);
  };

  render() {
    return (
      <div id="sidebar-container">
        <button
          type="button"
          id="random-button"
          onClick={this.handleClickRandom}
        >
          Random Color
        </button>
        <div id="sidebar-colors">
          <div className="sidebar-color-links">
            <button
              type="button"
              className="sidebar-category-button"
              name="Red"
              onClick={this.handleClickCategory}
            >
              Red
            </button>
          </div>
          <div className="sidebar-color-links">
            <button
              type="button"
              className="sidebar-category-button"
              name="Orange"
              onClick={this.handleClickCategory}
            >
              Orange
            </button>
          </div>
          <div className="sidebar-color-links">
            <button
              type="button"
              className="sidebar-category-button"
              name="Yellow"
              onClick={this.handleClickCategory}
            >
              Yellow
            </button>
          </div>
          <div className="sidebar-color-links">
            <button
              type="button"
              className="sidebar-category-button"
              name="Green"
              onClick={this.handleClickCategory}
            >
              Green
            </button>
          </div>
          <div className="sidebar-color-links">
            <button
              type="button"
              className="sidebar-category-button"
              name="Blue"
              onClick={this.handleClickCategory}
            >
              Blue
            </button>
          </div>
          <div className="sidebar-color-links">
            <button
              type="button"
              className="sidebar-category-button"
              name="Purple"
              onClick={this.handleClickCategory}
            >
              Purple
            </button>
          </div>
          <div className="sidebar-color-links">
            <button
              type="button"
              className="sidebar-category-button"
              name="Brown"
              onClick={this.handleClickCategory}
            >
              Brown
            </button>
          </div>
          <div className="sidebar-color-links">
            <button
              type="button"
              className="sidebar-category-button"
              name="Gray"
              onClick={this.handleClickCategory}
            >
              Gray
            </button>
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
    fetchSingleCategory: function(name) {
      dispatch(fetchSingleCategory(name));
    },
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Sidebar)
);
