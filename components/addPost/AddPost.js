import Link from "next/link";
import Style from './add.module.css';


export default function AddPost() {
  return (
    <div>
        <Link href='/mypost'>
          <a className={Style.add}>Добавить пост</a>
        </Link>
    </div>
  )
}
