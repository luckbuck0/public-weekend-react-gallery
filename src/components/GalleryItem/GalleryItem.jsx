import { useState,useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList";

function GalleryItem(props){
   
   let pics=props.pic
    
    console.log(pics);
const [isClicked,setIsClicked]=useState(false)

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
                <div>
                <img onClick={touched} className="pics" src={props.pic.path} alt="" /> 
                </div>
        <br></br>
        <button onClick={increaseLove}>Love It</button> <br />
        <span>{count} People love this!</span>
            </div>
            
        )
    }
   else {
    return (
        <div onClick={unTouched} className="pics">
            <p >{props.pic.description}</p>
        </div>
    )
   }
    
}
// function (){
// return(
// <div onclick=description> img src props.pic.path <div>
//)
//}
const [count,setCount] = useState(0)
function increaseLove(){
    console.log('love it');
    setCount(count+1)
}
return(

   <div>
        
        {description()}
   </div>
  )
}

export default GalleryItem;