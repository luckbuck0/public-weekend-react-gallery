// importing the use state tool
import { useState} from "react";
// importing the axios state tool
import Axios from "axios";

//A function to display the galleries
function GalleryItem(props){
   
    // assigning a variable to the props data
   let pics=props.pic
    
    console.log(pics);
    // defining a isclicked function to use for the image
const [isClicked,setIsClicked]=useState(true)

// function to set clicked to false
function touched(){
    setIsClicked(false)
    
}

// function to set click to true
function unTouched(){
    setIsClicked(true)
    
}

// a variable called description that has a function that displays 
// certain info depending on a conditional
  const description= ()=>{
   
    if(isClicked){
        return (
            <div>
                
                <img onClick={touched} className="pics" src={props.pic.path} alt="" /> 
                
        <br></br>
        <span className="button" onClick={increaseLove}>❤️</span> <br />
        <span>{props.pic.likes} People love this!</span>
            </div>
            
        )
    }
   else {
    return (
        <div onClick={unTouched} className="pics">
            <p >{props.pic.description}</p>
            <br></br>
        <button className="button" onClick={increaseLove}>Love It</button> <br />
        <span>{props.pic.likes} People love this!</span>
        </div>
    )
   }
    
}
// setting count 
const [count,setCount] = useState(0)

// a function to increase the likes using a put request to update
// the count of likes
function increaseLove(){
    let id=props.pic.id
    console.log('love it');
    setCount(props.pic.likes)
    Axios({
        method:'PUT',
        url:`/gallery/like/${props.pic.id}`,
        data:{
            id:id,
            likes:props.pic.likes +1
        }
    }).then((response)=>{
        props.getGallery()
        console.log('done');
    }).catch((error)=>{
        console.log('whoops', error);
    })
}
return(

   <div>

        {description()}
   </div>
  )
}
// exporting galleryitem
export default GalleryItem;