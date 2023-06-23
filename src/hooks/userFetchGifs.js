import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const userFetchGifs = (category) => {

    const [images, setImages] = useState([]);

    const [isLoading, setisLoading] = useState(true)
    
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setisLoading(false);
    }
    
    //se lanza solo cuando se pinta el componente
    
    
    useEffect(()=>{
        getImages();
    },[])

    
  return {
    images,
    isLoading
  }
}

export default userFetchGifs
