import GalleryList from "../GalleryList/GalleryList";

function GalleryItem(props){
   let pics=props.pics
   console.log(props.path);
    
   function desciption(){
    console.log('helloooooooo');
    
    return (
        pics.map((pic)=>{
            return (
                <span key={pic.id} className="grid">
                <div>{pic.description}</div>
                <GalleryList />
                </span>
            )
        })
    )
}
return(

    pics.map((pic)=>{
        return (
            <span key={pic.id} className="grid">
            <img key={pic.id} className="pics" onClick={desciption} src={pic.path}  />
            <GalleryList />
            </span>
        )
    })
    
  )
}

export default GalleryItem;