
import  {useState } from 'react'
import { AddCategoey } from './AddCategoey';
import { GifGrid } from './componenets';





export const GifExpertApp = () => {

 
const [categories, setCategories] = useState(['negadas']);

const onAddCategory = (onNewCategory) => {
  console.log(onNewCategory)
  if(categories.includes(onNewCategory)) return
  setCategories([onNewCategory, ...categories]);
}


  return (
    <>
    <h2>Handymen Dash</h2>
    {/* Input */}
    <AddCategoey onNewCategory = { (value) => onAddCategory(value)} />
    {
      categories.map((category) => (
          <GifGrid
            key={category}
            category={category}/>
      ))
    }
    </>
  )
}
 