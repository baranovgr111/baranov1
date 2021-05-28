import s from "./Profile.module.css"

function Profile() {
    return (
        <div className={s.Profile}>
            <img className={s.img}
                 src="https://sun9-9.userapi.com/impg/b8hm18g0Xo5eD8JanWUz5t0rOmzeXEm-4jV6xA/J8iEcWjHqg8.jpg?size=512x482&quality=96&sign=b57650a6b2c30f08cddbb748bcb915ba&type=album"
                 alt=""></img>
            <h1>Егор Баранов</h1>
            <a className={s.a} href="">123123</a>
            <h3> 53.123 followers 17232 following</h3>
        </div>
    )
}

export default Profile