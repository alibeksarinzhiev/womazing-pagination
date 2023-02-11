import axios from "axios";
import { createContext, useEffect,useState } from "react";

export const CustomContext = createContext()
export const Context = (props)=>{


    const [clothes, setClothes] = useState([])
    const [basket, setBasket] = useState([])
        

    const addBasket = (product)=>{
        setBasket(prev=> [...prev,product])
        localStorage.setItem('basket',JSON.stringify(product))

        
        

    }
    

useEffect(()=>{
axios('http://localhost:3004/posts')
.then(({data})=>setClothes(data))
},[])
const value = {
clothes,
addBasket,
basket
}


    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}
