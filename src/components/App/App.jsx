import React, { useState,useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import Axios from 'axios';

// import { response } from 'express';


function App() {

  const [pics,setPics]=useState([])
 
  
  useEffect(() => {
    getGallery()
  }, [])

 const getGallery = ()=>{
    Axios({
      method: 'GET',
      url:'/gallery'
    }).then((response)=>{
      const list=response.data
      console.log(response.data);
      setPics(list)
    }).catch((error)=>{
      console.log('whoops didnt work', error);
    })
  }

    return (
     
      <div className="App">
        
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div className='post'>
       
        <GalleryItem 
        pics={pics} 
        />
        
        </div>
        

      </div>
    );
}

export default App;
