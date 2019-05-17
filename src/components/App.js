import axios from "axios";
import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term)  {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 079f8617943304632b6b8db110d494f0b67c7b589130003c88ee53726a882323"
      }
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
