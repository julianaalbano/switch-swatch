import React from 'react';
import { connect } from 'react-redux';
import { fetchColors } from '../store/colors';
import { Link } from 'react-router-dom';

class Colors extends React.Component {
  componentDidMount() {
    this.props.fetchColors();
  }
  render() {
    const { colors } = this.props;
    return (
      <div id="all-colors-container">
        {colors.allColors.map(color => (
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
    fetchColors: function() {
      dispatch(fetchColors());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Colors);
