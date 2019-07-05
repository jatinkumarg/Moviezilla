import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
function App() {
  //https://i.ibb.co/jbcyWRT/Moviezilla-logo-white-1.png
  //https://i.ibb.co/f4qht4h/Moviezilla-logo-1.png
  return (
    <div className="App">
      <nav>
        <a href="/">
          {" "}
          <img
            alt="trackerr"
            src="https://i.ibb.co/jbcyWRT/Moviezilla-logo-white-1.png"
            style={{ height: 100, width: 300, paddingBottom: -40 }}
          />
        </a>
      </nav>
      <MovieList />
    </div>
  );
}

export default App;
