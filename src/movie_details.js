import React, { Component } from "react";

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

class MovieDetails extends Component {
  state = {
    loading: true,
    error: false,
    movie: null,
  };
  componentDidMount = () => {
    this.setState({
      loading: true,
      searchValue: "",
      selectedId: null,
    });

    fetch(`${url}i=${this.props.imdbID}`).then(checkStatus).then(res => res.json()).then(
      movie => {
        this.setState({
          movie,
          loading: false,
          error: false,
        });
      },
      () => {
        this.setState({
          movie: null,
          loading: false,
          error: true,
        });
      },
    );
  };

  render() {
    return (
      <div className="detail">
        {this.state.loading && <div>Loading...</div>}
        {!this.state.loading &&
          !this.state.error &&
          <div>
            <button className="button" onClick={this.props.onClear}>Clear</button>
            <h1>
              {this.state.movie.Title}
            </h1>
            <img src={this.state.movie.Poster} />
            <div>
              Released: {this.state.movie.Released}
            </div>
            <div>
              Actors: {this.state.movie.Actors}
            </div>
            <p>
              {this.state.movie.Plot}
            </p>
          </div>}
      </div>
    );
  }
}

export default MovieDetails;
