import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconOnlyBtn(props) {
    return(
        <>
            <div className='icon__only-btn'>
                <FontAwesomeIcon icon={props.icon}/>
            </div>
        </>
    )
}