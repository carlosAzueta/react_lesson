import { useState } from "react"

export const AddCategoey = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('')

const onChangeValue = ({target}) => {
    setInputValue(target.value);
}

const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 0) return;


    //console.log(inputValue);
    onNewCategory(inputValue)
    //setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");

}


  return (
    
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar" 
            value={inputValue}
            onChange={(event) => onChangeValue(event)}/>
    </form>

  )
}
