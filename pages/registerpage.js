import { createUserWithEmailAndPassword, getAuth, } from "firebase/auth"
import { useDispatch } from "react-redux";
import { addUser } from "../components/store/userSlice";
import FormAuth from "../components/formAuth/FormAuth";
import Link from "next/link";
import style from '../styles/reg.module.css';
import { useRouter } from "next/router";
export default function registerpage() {
    const router = useRouter() 
    const disp = useDispatch()
    const handleReg = (email,password)=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then(({user})=>{
            disp(addUser({
                email:user.email,
                id:user.uid,
                token:user.accessToken
            }))
            router.push('/')
        })
    }
  return (
    <div className={style.reg}>
         <FormAuth
         title='Регистрация'
         func={handleReg}
        />
        <p>
            или <Link href='/authpage'><a>Войти</a></Link>
        </p>
    </div>
  )
}
