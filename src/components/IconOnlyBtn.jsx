import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faIcons } from "@fortawesome/free-solid-svg-icons";
import '../assets/css/IconOnlyBtn.css';

export default function IconOnlyBtn(props) {
    return(
        <div className="icon__only-btn">
            <FontAwesomeIcon icon={ props.icon }/>
        </div>
    )
}