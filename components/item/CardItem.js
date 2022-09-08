import React from 'react'
import { useSelector } from 'react-redux'
import Style from './carditem.module.css';
import Image from 'next/image';
export default function CardItem() {
    const sel = useSelector((state)=>state.cards.arr)
    console.log(sel)
  return (
    <div className={Style.wrap}>
        {
           sel.map((el,key)=>{
            return <div key={key} className={Style.item}>
                <Image key={key} src={el.url} alt='image'/>
                <h3 key={key}  >{el.title}</h3>
                </div>
           })
        }
    </div>
  )
}
