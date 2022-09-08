
import { useState } from 'react';
import style from './formAuth.module.css';
export default function FormAuth({title,func}) {
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

  return (
    <div className={style.forms}>
        <input
          type='email'
          onChange={(e)=>setEmail(e.target.value)}
          placeholder='Введите ваш email....'
          />
        <input
          type='password'
          onChange={(e)=>setPassword(e.target.value)}
          placeholder='Введите ваш пароль.....'
          />
          <button onClick={()=>func(email,password)}>{title}</button>
      
    </div>
  )
}
