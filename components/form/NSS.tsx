import React from 'react'
import {ResponseEnty} from "../../interfaces/response"
import Img from 'next/image'

export default function NSS (props:any)  {
    console.log("NSS=",props)
  return (
    <>
    {props.data.res.map((item:ResponseEnty, index:number) => (
      <div key={index}>
        Pokemons
        <div>Name: {item.name}</div>
        {/*<div>URL: <Img src="https://th.bing.com/th/id/OIP.yVUuOcXPtPb3A7JmWNyb7wEsCW?pid=ImgDet&rs=1" alt="img" width={100} height={100}/></div>*/}
        <div>URL:{item.url}</div>
      </div>
    ))}
  </>
  )
};