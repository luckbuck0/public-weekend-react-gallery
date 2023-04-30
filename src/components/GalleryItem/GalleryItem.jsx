import { useState,useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList";
import Axios from "axios";
function GalleryItem(props){
   
   let pics=props.pic
    
    console.log(pics);
const [isClicked,setIsClicked]=useState(true)

function touched(){
    setIsClicked(false)
    
}
function unTouched(){
    setIsClicked(true)
    
}

  const description= ()=>{
   
    if(isClicked){
        return (
            <div>
                
                <img onClick={touched} className="pics" src={props.pic.path} alt="" /> 
                
        <br></br>
        <button className="button" onClick={increaseLove}>Love It</button> <br />
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

const [count,setCount] = useState(0)

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

export default GalleryItem;