import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBarChart, faHouse, faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
import '../assets/css/SbMenuLabel.css'

export default function SbMenuLabel(props) {
    const [isChecked, setIsChecked] = useState(false);
    if(!isChecked)
    return(
        <div className="sb__option-label" onClick={() => setIsChecked(!isChecked)}>
            <div className="icon">
                <FontAwesomeIcon icon={props.icon}/>
            </div>
            <div className="text league-spartan-light">
                {props.text}
            </div>
        </div>
    )
    else
        return(
            <div className="sb__option-label_toggled" onClick={() => setIsChecked(!isChecked)}>
                <div className="icon">
                    <FontAwesomeIcon icon={props.icon}/>
                </div>
                <div className="text league-spartan-light">
                    {props.text}
                </div>
            </div>
        )
    
}