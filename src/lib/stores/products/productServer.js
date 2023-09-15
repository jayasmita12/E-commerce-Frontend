import { products,product , sortBy , sortByRating } from "./productStore";
import {data} from "./products"
import {get} from "svelte/store"

export const getProducts = async()=>{
    products.set(data)
    return data
}

export const getCategoryFilter=(category)=>{
    let filteredData = data.filter((e)=> e.category === category)
    products.set(filteredData)
    return filteredData
}

export const getPriceFilter=(e)=>{
    sortBy.set(e.target.value)
    if (get(sortBy) === "high-to-low") {
        let filteredData = get(products).slice().sort((a, b) => b.price - a.price);
        products.set(filteredData)
        return filteredData
    } else if (get(sortBy) === "low-to-high") {
        let filteredData = get(products).slice().sort((a, b) => a.price - b.price);
        products.set(filteredData)
        return filteredData
    }
}

export const getRatingFilter = (e) =>{
    sortByRating.set(e.target.value)
    if (get(sortByRating) === "4& above") {
        let filteredData = get(products).filter((e)=> e.rating >= 4)
        products.set(filteredData)
        return filteredData
    } else if (get(sortByRating) === "3& above") {
        let filteredData = get(products).filter((e)=> e.rating >= 3)
        products.set(filteredData)
        return filteredData
    }else if (get(sortByRating) === "2& above") {
        let filteredData = get(products).filter((e)=> e.rating >= 2)
        products.set(filteredData)
        return filteredData
    }else if (get(sortByRating) === "1& above") {
        let filteredData = get(products).filter((e)=> e.rating >= 1)
        products.set(filteredData)
        return filteredData
    }
}

export const getSingleProduct=(id)=>{
   let singleproduct = data?.filter((e)=>e.id === id)
   product.set(singleproduct[0])
   return singleproduct
}
