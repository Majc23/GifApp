import React,{useState}from 'react'
import PropType from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    }
    const handleSubit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>2){
            //console.log("Submit hecho");
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit = {handleSubit}>  
            
            <input
                type = "text"
                value = {inputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropType.func.isRequired
}