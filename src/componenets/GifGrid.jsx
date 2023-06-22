import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }
    
    useEffect(()=>{
        getImages();
    },[])


    return (
    <>
        <h1>{category}</h1>
        <p>{category}</p>
        <ol>
            {
                images.map(({id, title}) => {
                    <li key={id}>{title}</li>
                })
            }
        </ol>

    </>
  )
}

export default GifGrid
