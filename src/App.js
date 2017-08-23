import React, { Component } from "react";
import "./App.css";

import MovieGrid from "./movie_grid";
import MovieDetail from "./movie_details";

const API_KEY = "3db77742";
const url = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

class App extends Component {
  state = {
    error: false,
    movies: [],
    searchValue: "",
    selectedId: null,
  };
  handleSearch = () => {
    const { searchValue } = this.state;

    if (!searchValue) return;

    this.setState({
      loading: true,
      searchValue: "",
      selectedId: null,
    });

    fetch(`${url}s=${searchValue}`).then(checkStatus).then(res => res.json()).then(
      movies => {
        this.setState({
          movies: movies.Search,
          loading: false,
          error: false,
        });
      },
      () => {
        this.setState({
          movies: [],
          loading: false,
          error: true,
        });
      },
    );
  };

  handleMovieSelect = imdbID => {
    this.setState({
      selectedId: imdbID,
    });
  };

  handleClearSelected = () => {
    this.handleMovieSelect(null);
  };

  render() {
    const hasMoviesNoneSelected = !!this.state.movies.length && !this.state.selectedId;
    const hasSelected = !!this.state.selectedId;

    return (
      <div className="App">
        <div>
          <input
            type="text"
            value={this.state.searchValue}
            onChange={e => this.setState({ searchValue: e.target.value })}
            className="input"
          />
          <button className="button" onClick={this.handleSearch}>
            Search
          </button>
        </div>

        {hasMoviesNoneSelected &&
          <MovieGrid movies={this.state.movies} onMovieSelect={this.handleMovieSelect} />}

        {hasSelected &&
          <MovieDetail onClear={this.handleClearSelected} imdbID={this.state.selectedId} />}
      </div>
    );
  }
}

export default App;
