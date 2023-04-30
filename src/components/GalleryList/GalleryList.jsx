import { useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import axios from "axios";

function GalleryList(){
    

    let [pics,setPics]=useState([])

    useEffect(() => {
		getGallery();
	}, []);
    
    const getGallery = ()=>{

        axios({
          method: 'GET',
          url:'/gallery'
        }).then((response)=>{
          
          console.log(response.data);
          setPics(response.data)
        }).catch((error)=>{
          console.log('whoops didnt work', error);
        })
      }

      
      

    


    return (
        <div>
            
        
        {
          pics.map((pic) => {
            return (
                <div className="container">
                    <GalleryItem pic={pic}
                    getGallery={getGallery}
                    />    
                </div>
             
            )
          })
        }
        </div>
    )

}

export default GalleryList;