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

      
      

    
    const [count,setCount] = useState(0)

function increaseLove(){
    console.log('love it');
    setCount(count+1)
}
    return (
        <div>
            
        <button onClick={increaseLove}>Love It</button> <br />
        <span>{count} People love this!</span>
        {
          pics.map((pic) => {
            return (
             <GalleryItem pic={pic}/>
            )
          })
        }
        </div>
    )

}

export default GalleryList;