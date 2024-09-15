import { useState } from "react";
import MenuOptionBtn from "./MenuOptionBtn";
import { faArrowRightFromBracket, faUserGear, faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import '../assets/css/ProfileMenu.css'
export default function ProfileMenu(props) {
    const [isChecked, setIsChecked] = useState(false);
    if(!isChecked)
    return(
        <div className="profile__menu" >
            <img className="img__holder" src={props.imgLink} alt="User profile pic" onClick={() => setIsChecked(!isChecked)} />
        </div>
    )
    else return(
        <>
            <div className="profile__menu" >
                <img className="img__holder" src={props.imgLink} alt="User profile pic" onClick={() => setIsChecked(!isChecked)}/>
            </div>
            <div className="dd__menu">
                <div className="user__info-holder">
                    <img className="img__holder" src={props.imgLink} alt="User profile pic" />
                    <div className="uih__name league-spartan-semibold">{props.userName}</div>
                </div>
                <div className="opt__holder">
                    <MenuOptionBtn icon={ faWaveSquare } optionName="Stream Manager" />
                    <MenuOptionBtn icon={ faUserGear } optionName="Profile Settings" />
                    <MenuOptionBtn icon={ faArrowRightFromBracket } optionName="Log out" />
                </div>
            </div>
        </>
        
    )
}