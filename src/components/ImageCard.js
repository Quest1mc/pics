import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {spans : 0 };
    this.imageRef = React.createRef();

    // ^^^^^^^^^^^^^^^^^ notice we use ref inplace of querySelector: it's a quirk of react^^^^^^^^^^^^
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
   const height =this.imageRef.current.clientHeight;
   const spans = Math.ceil(height /10) ;
   this.setState({ spans})
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style= {{gridRowEnd:`span ${this.state.spans}`}}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
        {/* ^^^^^^^^^^^^^^^^^ using ref system to reference a dom element^^^^^^^^^^^ */}
      </div>
    );
  }
}

export default ImageCard;
