import Link from "next/link";
import Form from "../components/form/form";
import Style from '../styles/post.module.css';


export default function mypost() {
  return (
    <div className={Style.mypost}>
      <Form/>
      <Link href="/">
      <a>назад</a>
      </Link>
    </div>
  )
}
