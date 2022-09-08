import FormAuth from "../components/formAuth/FormAuth"
import {signInWithEmailAndPassword,getAuth} from 'firebase/auth'
import { useDispatch } from "react-redux";
import { addUser } from "../components/store/userSlice";

import {useRouter} from "next/router";
import Link from "next/link";
import style from '../styles/authpage.module.css';
export default function authpage() {
    const nav = useRouter()
    const disp = useDispatch()
    const handleAuth =(email,password)=>{
      const auth = getAuth();
      signInWithEmailAndPassword(auth,email,password)
      .then(({user})=>{
           ///dispatch and useNavigate
            disp(addUser({
                email:user.email,
                id:user.uid,
                token:user.accessToken
            }))
            nav.push('/')

      })
    }
  return (
    <div className={style.auth}>
        <FormAuth
         title='Войти'
         func={handleAuth}
        />
        <p>
            или

            <Link href='/registerpage'>
              <a>регистрация</a>
        </Link> </p>
    </div>
  )
}
