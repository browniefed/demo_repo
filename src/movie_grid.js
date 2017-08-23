import React, { Component } from "react";

class MovieGrid extends Component {
 

  render() {
    const { movies, onMovieSelect } = this.props;

    return (
      <div className="movie_grid">
        {movies.map(movie => {
          return (
            <div onClick={() => onMovieSelect(movie.imdbID)} className="movie">
              <img src={movie.Poster} />
              <h2>
                {movie.Title}
              </h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieGrid;
