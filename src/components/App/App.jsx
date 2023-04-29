import React, { useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';


function App() {
  function getGallery(){
    console.log('hello');
  }
    return (
     
      <div className="App">
        
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div className='post'>
        <img src="images/goat_small.jpg"/> <br></br>
        <GalleryItem 
        />
        <GalleryList />
        </div>
        

      </div>
    );
}

export default App;
