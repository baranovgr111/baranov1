import s from "./Section.module.css"
import Profile from "./Profile/Profile"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Section() {
    return (
        <div className={s.Section}>
            <Profile/>
            <ProfileInfo/>
        </div>
    );
}

export default Section