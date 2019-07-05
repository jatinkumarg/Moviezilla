import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export default class MoviesList extends Component {
  state = {
    moviesList: ["tt0848228"],
    searchTerm: ""
  };

  search = event => {
    event.preventDefault();
    axios
      .get(
        `https://www.omdbapi.com/?apikey=df36dd91&s=${
          this.state.searchTerm
        }&plot=full`
      )
      .then(res => res.data)
      .then(res => {
        if (!res.Search) {
          this.setState({ moviesList: [] });
          return;
        }

        const moviesList = res.Search.map(movie => movie.imdbID);
        this.setState({
          moviesList
        });
      });
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    const { moviesList } = this.state;

    return (
      <div>
        <form onSubmit={this.search}>
          <input
            placeholder="Search for a movie"
            onChange={this.handleChange}
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
        {moviesList.length > 0 ? (
          moviesList.map(movie => <MovieCard movieID={movie} key={movie} />)
        ) : (
          <div>
            <br />
            <br />
            <br />
            <br />
            <h2 style={{color:'white'}}>
              No results. Please search again using another search criteria.
            </h2>
          </div>
        )}
      </div>
    );
  }
}
