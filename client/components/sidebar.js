import React from 'react';
// import { connect } from 'react-redux';
// import { fetchSingleColor } from '../store/colors';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // componentDidMount() {
  //   // this.props.fetchColors();
  // }
  // colorGenerator = () => {
  //   let randomNum = Math.floor(Math.random() * 104) + 1;
  //   // this.setState({ randomNum });
  // };
  // let randomColor = colorGenerator();
  render() {
    const { history } = this.props;
    return (
      <div id="sidebar-container">
        {/* <Link to={`/colors/${colorGenerator()}`}> */}
        <button
          type="button"
          id="random-button"
          onClick={history.push(
            `/colors/${Math.floor(Math.random() * 104) + 1}`
          )}
        >
          Random Color
        </button>
        {/* </Link> */}
        <div id="sidebar-colors">
          <p>Red</p>
          <p>Orange</p>
          <p>Yellow</p>
          <p>Green</p>
          <p>Blue</p>
          <p>Purple</p>
          <p>Brown</p>
          <p>Gray</p>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     singleColor: state.colors,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchSingleColor: function(id) {
//       dispatch(fetchSingleColor(id));
//     },
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Sidebar);

export default Sidebar;
