import React, { Component } from "react";
import "./App.css";

import BigImage from "./BigImage";


// Life Cycle Events
// Higher Order Components
// Selectors

class App extends Component {
  state = {
    loading: true,
    error: false,
    pictures: [],
    selectedId: null
  };
  componentDidMount() {
    return fetch("https://unsplash.it/list").then(res => res.json()).then(
      pictures => {
        this.setState({
          loading: false,
          pictures: pictures.slice(1, 11),
        });
      },
      e => {
        this.setState({
          loading: false,
          error: "Failed to load data " + e.message,
        });
      }
    );
  }

  clear = () => {
    this.setState({
      selectedId: null,
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.loading && <div>Loading...</div>}
        {this.state.error &&
          <div>
            {this.state.error}
          </div>}

        {!this.state.selectedId && this.state.pictures.map(({ id, author, author_url }) => {
          return (
            <div key={id} onClick={() => this.setState({selectedId: id})}>
              <img src={`https://unsplash.it/400/400?image=${id}`} />
              <div>
                <a href={author_url} target="_blank">
                  {author}
                </a>
              </div>
            </div>
          );
        })}
        
        {
          this.state.selectedId && <BigImage id={this.state.selectedId} onClear={this.clear} />
        }
      </div>
    );
  }
}

export default App;
