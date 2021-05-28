
import s from "./header.module.css"

function Header(){
    return(
        <div className={s.Header}>
            <img className={s.img} src="https://www.pngarts.com/files/8/Github-Logo-Free-PNG-Image.png" alt=""></img>
            <input className={s.input}/>
        </div>
    );
}
export default Header