import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageComponent = () => {
  const [images, setImages] = useState([]);
  const [error,setError]= useState("");

  useEffect(() => {
    const fetchImages = async () => {
 
      try {
        const response = await axios.get('https://s55-omjadhav-capstone-artisticexchangehub.onrender.com/images');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Failed to fetch images. Please try again later.');
      }
 
    };

    fetchImages();
}, []);


  return (
    <div>
      {images && images.map(image => (
        <img key={image._id} src={image.img}  />
      ))}
    </div>
  );
};

export default ImageComponent;
