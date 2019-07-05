import React, { Component } from "react";
import axios from "axios";
//df36dd91
export default class MovieCard extends Component {
  state = {
    movieData: {}
  };
  componentDidMount() {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=df36dd91&i=${
          this.props.movieID
        }&plot=full`
      )
      .then(res => res.data)
      .then(res => {
        this.setState({ movieData: res });
      });
  }
  render() {
    //const DEFAULT_POSTER = 'https://i.ibb.co/KKQMB06/main-qimg-d2e2063f91c8ff1b17c81ac91b0ae949.png';
    const {
      Title,
      Released,
      Genre,
      Plot,
      Poster,
      imdbRating
    } = this.state.movieData;

    let finalPoster = Poster;
    if (!finalPoster || finalPoster === "N/A") {
        // finalPoster = DEFAULT_POSTER;
        return null;
    }
    return (
      <div className="movie-card-container">
        <div className="image-container">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${finalPoster})` }}
          />
        </div>
        <div className="movie-info">
          <h2>Movie Details</h2>
          <div>
            <h1>{Title}</h1>
            <small>Released Date: {Released}</small>
          </div>
          <h4>Rating: {imdbRating} / 10</h4>
          <p>{Plot && Plot.substr(0, 400)}</p>
          <div className="tags-container">
            {Genre && Genre.split(", ").map(g => <span>{g}</span>)}
          </div>
        </div>
      </div>
    );
  }
}
