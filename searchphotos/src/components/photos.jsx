import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Photos.css';

import Card from 'react-bootstrap/Card';

function Photos() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);

  const handleButton = () => {
    console.log(search);
    
  };

  useEffect(() => {
    const url = 'http://localhost:64170/api/Photos';
    axios.get(url).then((result) => {
      console.log(result.data);
      setImages(result.data);
    });
  }, []); // Add an empty dependency array to useEffect to run it only once on component mount

  // Filter images based on the search query
  const filteredImages = images.filter((item) =>
    item.Title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className='search-field'>
        <input
          type='text'
          size='30'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />&nbsp;
        <button onClick={handleButton}>Search</button>
      </div>
      <br/><br/>
      <div className='container'>
        {filteredImages.map((item, id) => (
          <Card key={id} className='card'>
            <Card.Img variant="top" src={item.Photos} className='pics' />
            <Card.Body>
              <Card.Title className='title'>{item.Title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Photos;
