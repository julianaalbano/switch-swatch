import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleCategory } from '../store/colors';

class ColorCategory extends React.Component {
  componentDidMount() {
    this.props.fetchSingleCategory(this.props.match.path.slice(1));
  }
  render() {
    const { colors } = this.props;
    if (this.props.colors.loading) return <h1>Loading...</h1>;
    return (
      <div id="all-category-container">
        <h1 id="category-title">{colors.colorCategory.name}</h1>
        <div id="ind-colors-container">
          {colors.colorCategory.colors.map(color => (
            <Link to={`/colors/${color.id}`} key={color.id}>
              <div
                className="color-container"
                style={{ backgroundColor: `${color.hexCode}` }}
              >
                <button type="button">{color.hexCode}</button>
              </div>
            </Link>
          ))}
        </div>
        <br />
        <Link
          to="/colors"
          className="wrapper"
          style={{ textDecoration: 'none' }}
        >
          <button type="button" className="pointer-cursor">
            Back to all colors
          </button>
        </Link>
        <br />
        <br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    colors: state.colors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSingleCategory: function(name) {
      dispatch(fetchSingleCategory(name));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorCategory);
