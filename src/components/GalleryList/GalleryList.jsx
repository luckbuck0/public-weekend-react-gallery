import { useState } from "react";

function GalleryList(){
    console.log('hello');
    const [count,setCount] = useState(0)
function increaseLove(){
    console.log('love it');
    setCount(count+1)
}
    return (
        <div>
        <button onClick={increaseLove}>Love It</button> <br />
        <span>{count} People love this!</span>
        </div>
    )

}

export default GalleryList;