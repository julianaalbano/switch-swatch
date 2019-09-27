import React from 'react';
import history from '../history';
// import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = props => {
  let colorGenerator = () => {
    let randomNum = Math.floor(Math.random() * 104) + 1;
    return randomNum;
  };
  let randomColor = colorGenerator();

  return (
    <div id="sidebar-container">
      <Link to={`/colors/${randomColor}`}>
        <button type="button" id="random-button">
          Random Color
        </button>
      </Link>
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
};

export default Sidebar;
