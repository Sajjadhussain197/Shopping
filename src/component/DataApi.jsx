import React, { useEffect, useState } from 'react'
import GetData from './GetData';

const DataApi = () => {
    const [products, setProducts]=useState([])
    const [filterdata, setFilterdata]=useState([])

    async function  getdata (){
        const response = await fetch('https://fakestoreapi.com/products')
        const data=await response.json();
        setProducts(data)

        
    }
    useEffect(()=>{
        getdata();
    },[])

    const fiterdatabycategory=(category)=>{
       
        if(category==="all"){
            setFilterdata(products)
        }
        else{
                const filterdata= products.filter((item)=>item.category=== category.toLocaleLowerCase())
                setFilterdata(filterdata)
        }
    }
 
  return (
    <div >
    <div style={{display:"flex", gap:"20px" }}>
    <button onClick={ ()=>fiterdatabycategory("all") }>All</button>
    <button onClick={()=>fiterdatabycategory("men's clothing")}>Mens</button>
    <button onClick={()=>fiterdatabycategory("women's clothing")}>women</button>
    <button onClick={()=>fiterdatabycategory("jewelery")}>jewelery</button>
  
    <button onClick={()=>fiterdatabycategory("electronics")}>Electronics</button>
    </div>
    
    <div style={{ display:"flex", flexWrap:"wrap", gap:"20px", alignItems:"center" }}>
     { 
        
        
        filterdata.length===0?   
            products.map((product,index)=>{
            
            return(
                <GetData key={index} title={product.title} price={product.price} image={product.image} category={product.category} />    )
            
      }
      )
        :
        filterdata.map((product,index)=>{
            
            return(
                <GetData key={index} title={product.title} price={product.price} image={product.image} category={product.category} />    )
            
      }
      )
     }
     </div>
     </div>
  )
}

export default DataApi
