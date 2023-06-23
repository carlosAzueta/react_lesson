import { useState, useEffect } from "react"

import GifItem from "./GifItem";
import userFetchGifs from "../hooks/userFetchGifs";

//import { getGifs } from "../helpers/getGifs"


export const GifGrid = ({category}) => {
    
    //custom hoks
    const {images, isLoading} = userFetchGifs(category)
    
    return (
    <>
        <h1>{category}</h1>
        <p>{category}</p>

        { isLoading && <h3>Cargando....</h3>}
        <div className="card-grid">
        {
            images.map( (image) => (
                <GifItem
                key={image.id}
                { ...image }
                />
            ))
        }  
        </div>

    </>
  )
}

