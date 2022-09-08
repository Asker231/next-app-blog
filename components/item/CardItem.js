import React from 'react'
import { useSelector } from 'react-redux'
import Style from './carditem.module.css';

export default function CardItem() {
    const sel = useSelector((state)=>state.cards.arr)
    console.log(sel)
  return (
    <div className={Style.wrap}>
        {
           sel.map((el)=>{
            return <div className={Style.item}>
                <img src={el.url} alt='image'/>
                <h3>{el.title}</h3>
                
                
                </div>
           })
        }
    </div>
  )
}
