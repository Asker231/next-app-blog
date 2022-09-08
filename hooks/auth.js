import { useSelector } from "react-redux"


export default function auth() {
    const {email,id,token} = useSelector((state)=>state.users)
  return (
    {
        isAuth:!!email,
        email,
        id,
        token
    }
  )
}
