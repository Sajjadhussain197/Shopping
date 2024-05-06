import React from 'react'

const GetData = ({title, description, image, price, category}) => {
  return (
    <div >
    <h1>Get Data</h1>
      <div><img src={image} width={"100%"} height={200} alt="" /></div>
      <div><p style={{ textAlign:"center", fontWeight:"bold" }}>
                {title}
            </p></div>
            <div><p>{category}</p></div>
    </div>

  )
}

export default GetData
