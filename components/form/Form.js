import Style from './form.module.css';
import { addCard } from '../store/cardSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { v4 } from 'uuid';
export default function Form() {
  const route = useRouter()
    const disp =useDispatch()
    const [text,setText] = useState(null);
    const [title,setTitle] = useState(null);
    const[url,setUrl] = useState(null);
    const data ={
      text,
      title,
      url,
      id:v4()
    }
  return (
    <div className={Style.form}>
        <h3>Add post</h3>
        <input 
        onChange={(e)=>setTitle(e.target.value)}
        placeholder='Добавьте заголовок'
        />
        <textarea 
        placeholder='Описание....'
        rows={50}
        cols={6}
        onChange={(e)=>setText(e.target.value)}
        />
        <input
        placeholder='ссылка на изображение'
        onChange={(e)=>setUrl(e.target.value)}
        />
        <button  onClick={()=>{
          disp(addCard(data))
          if(text && title && url !== null){
            route.push('/') 
          }else{
            
            return 
          }
          setText('')
          setTitle('')
          setUrl('')
         
        }
          }>Опубликовать</button>

    </div>
  )
}
