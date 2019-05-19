import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';


// to render a list use .map method to create the jsx

const ImageList = (props) => {
   const images =props.images.map((image) =>{
    return <ImageCard key= {image.id} image={image} />;
   });
    return (
        <div className= "image-list">
          {images} 
        </div>
    );
};

export default ImageList;