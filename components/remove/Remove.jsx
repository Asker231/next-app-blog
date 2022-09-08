import Style from './remove.module.css';
import { removeUser } from '../store/userSlice';
import { useDispatch } from 'react-redux';

export default function Remove() {
    const disp = useDispatch()
  return (
    <div className={Style.remove}>
        <a onClick={()=>disp(removeUser())}>Выход</a>
    </div>
  )
}
