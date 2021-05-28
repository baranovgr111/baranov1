import s from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div className={s.ProfileInfo}>
            <h1>Reprositories(424)</h1>
            <div className={s.ProfileInfo_inner}>
                <a className={s.a} href="">Ссылка 1</a>
                <h3>описание 1</h3>
            </div>

            <div className={s.ProfileInfo_inner}>
                <a className={s.a} href="">Ссылка 2</a>
                <h3>описание 2</h3>
            </div>

            <div className={s.ProfileInfo_inner}>
                <a className={s.a} href="">Ссылка 3</a>
                <h3>описание 3</h3>
            </div>

            <div className={s.ProfileInfo_inner}>
                <a className={s.a} href="">Ссылка 4</a>
                <h3>описание 4</h3>
            </div>
        </div>
    )
}

export default ProfileInfo