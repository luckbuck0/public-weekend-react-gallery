import React, { useState,useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';

// import { response } from 'express';


function App() {

//   const [pics,setPics]=useState([])
 


//  const getGallery = ()=>{
//     axios.get({
//       method: 'GET',
//       url:'/gallery'
//     }).then((response)=>{
      
//       console.log(response.data);
//       setPics(response.data)
//     }).catch((error)=>{
//       console.log('whoops didnt work', error);
//     })
//   }

    return (
     
      <div className="App">
        
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div className='post'>
       <GalleryList 
       
       />
       
        
        </div>
        

      </div>
    );
}

export default App;
