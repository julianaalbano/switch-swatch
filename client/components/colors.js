import React from 'react';
import { connect } from 'react-redux';
import { fetchColors } from '../store/colors';
import { Link } from 'react-router-dom';

class Colors extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      todosPerPage: 12,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchColors();
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const { colors } = this.props;
    const { currentPage, todosPerPage } = this.state;
    if (this.props.colors.loading) return <h1>Loading...</h1>;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = colors.allColors.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    const renderTodos = currentTodos.map(todo => {
      return <li key={todo.id}>{todo.hexCode}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(colors.allColors.length / todosPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      if (number === this.state.currentPage) {
        return (
          <button
            key={number}
            type="button"
            className="ind-page-nums"
            id={number}
            onClick={this.handleClick}
            style={{ textDecoration: 'underline', fontWeight: 900 }}
          >
            {number}
          </button>
        );
      } else {
        return (
          <button
            key={number}
            type="button"
            className="ind-page-nums"
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </button>
        );
      }
    });

    return (
      <div>
        <ul>{renderTodos}</ul>
        <p id="page-numbers">{renderPageNumbers}</p>
      </div>
      // <div id="all-colors-container">
      //   {colors.allColors.map(color => (
      //     <Link to={`/colors/${color.id}`} key={color.id}>
      //       <div
      //         className="color-container"
      //         style={{ backgroundColor: `${color.hexCode}` }}
      //       >
      //         <button type="button">{color.hexCode}</button>
      //       </div>
      //     </Link>
      //   ))}
      // </div>
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

// const page1 = colors.allColors.slice(0, 12);
// const page2 = colors.allColors.slice(12, 24);
// const page3 = colors.allColors.slice(24, 36);
// const page4 = colors.allColors.slice(36, 48);
// const page5 = colors.allColors.slice(48, 60);
// const page6 = colors.allColors.slice(60, 72);
// const page7 = colors.allColors.slice(72, 84);
// const page8 = colors.allColors.slice(84, 96);
// const page9 = colors.allColors.slice(96);
