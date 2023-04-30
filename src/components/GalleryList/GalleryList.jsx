// importing usestate and useeffect 
import { useState, useEffect } from "react";
// importing galleryitems
import GalleryItem from "../GalleryItem/GalleryItem";
// importing axios
import axios from "axios";

// a function to display the list 
function GalleryList(){
    
// a usestate to store the data from gets
    let [pics,setPics]=useState([])
// useeffect to stop repeat
    useEffect(() => {
		getGallery();
	}, []);
    // a variable called getgallery that stores a get request function
    // it sends the data to the pics 
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