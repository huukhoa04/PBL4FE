import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faEye, faIcons } from "@fortawesome/free-solid-svg-icons";
import '../assets/css/IconOnlyBtn.css'
export default function BtnIcon(props) {
    if(props.icons == faIcons){
        return(
            <>
                <div className="rr__icon-btn emoji-btn citizenship" onClick={props.onClick}>
                    <FontAwesomeIcon icon={props.icons}/>
                </div>
            </>
        )
    }
    else return(
        <>
            <div className="rr__icon-btn citizenship" onClick={props.onClick}>
                <FontAwesomeIcon icon={props.icons}/>
            </div>
        </>
    );
}
