import React from "react";

class SearchBar extends React.Component {
  state = { term: ''};

  //***********uncontrolled********** */
  // onInputChange(event){
  //     console.log(event.target.value)
  // }

  onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit= {this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text" value = {this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            {/* <input type="text" onChange = {(e) => console.log(e.target.value)}/> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
