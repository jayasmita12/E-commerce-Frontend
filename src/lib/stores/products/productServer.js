import { products } from "./productStore";
import {data} from "./products"

export const getProducts = async()=>{
    products.set(data)
    return data
}

export const getCategoryFilter=(category)=>{
    console.log(category)
    let filteredData = data.filter((e)=> e.category === category)
    products.set(filteredData)
    console.log(filteredData)
    return filteredData
}

