import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  // Important async will accept arrow functions but like this !!!!!
  onSearchSubmit = async term => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term }
      }
    );
    // this helps me check if every thing is working >>>>>>>console.log(response.data.results);
    // ******************if you use promises use code below**************
    // .then(response => {
    //     console.log(response.data.results);
    // });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images= {this.state.images} />
      </div>
    );
  }
}

export default App;
