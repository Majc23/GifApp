import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One punch']);
    
    /*const handleAdd = () => {
        //setCategories(['Naruto',...categories]);//Coloca el nuevo elemento en la posicion 0
        //setCategories([...categories,'Naruto']);//Coloca el nuevo elemento en la ultima posicon
        //setCategories(cats => [...categories,'Naruto']);
        setCategories(cats => ['Naruto',...categories,]);
    };*/

    return (
    <>
       <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = {setCategories}/> 
        <hr/>
       

        <ol>
            {
                categories.map( category =>  
                    <GifGrid 
                        key={category}
                        category = {category}
                    />
                )
            }
        </ol>
       </div> 
    </>    
    );
}

export default GifExpertApp ;
