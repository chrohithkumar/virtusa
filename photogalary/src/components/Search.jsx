import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';

export default function Search() {
    const [search, setSearch] = useState('');
    const [images, setImages] = useState([]);
    const [showImages, setShowImages] = useState(false);

    const handleButton = (e) => {
        e.preventDefault();

        if (search.trim() !== '') {
            const url = `http://localhost:64170/api/${search}`;
            axios.get(url)
                .then((result) => {
                    console.log(result.data);
                    setImages(result.data);
                    setShowImages(true);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    const changeHandler = (e) => {
        setSearch(e.target.value);
        setShowImages(false);
    }

    return (
        <div className='wrapper'>
            <div className='input-field'>
            <h1>Image Gallery</h1>
            
                <input type='text' size='30' value={search} onChange={changeHandler}></input>
                <br/><br/>
                <button onClick={handleButton}>Submit</button>
            
            </div>
          
            <br/><br/>
            <div>
              {showImages && (
                <div className="image-row">
                  {images.map((pic, id) => (
                    <div key={id} >
                      <img className='pics' src={pic.image} alt='Car'></img>
                    </div>
                  ))}
                </div>
              )}
            </div>
        </div>
    );
}
