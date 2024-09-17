import TagCard from "./TagCard";
import '../assets/css/StreamUserInfo.css'
import BtnIcon from "./BtnIcon";
import { faEllipsis, faEye, faHeart, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function StreamUserInfo(props) {
    return(
        <>
        <div className="sui__layout fill__container">
            <div className="sui__holder rr__flex-col">
                {/* content here */}
                <div className="user__info-holder rr_flex-row fill__container">
                    <div className="uih__left-holder rr__flex-row">
                          
                            <img src={props.profilePic} className="avatar__2x"/>
                        
                        <div className="uih__context-holder rr__flex-col">
                            <div className="uihc__h-username league-spartan-semibold fs__normal-2 citizenship">
                                {props.userName}
                            </div>
                            <div className="uihc__h-title league-spartan-semibold fs__normal-1 citizenship">
                                {props.title}
                            </div>
                            <div className="uihc__h-tag rr__flex-row">
                                <div className="uihc__h-category league-spartan-light fs__normal-2">
                                    {props.category}
                                </div>
                                <div className="uihc__h-tag__holder rr__flex-row">
                                    {/* map tag here */}
                                    <TagCard name="English"/>
                                    <TagCard name="Vietnamese"/>
                                    <TagCard name="RPG"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uih__right-holder rr__flex-col">
                        <div className="uihr__btn-holder rr__flex-row">
                            <BtnIcon icons={faHeart}/>
                            <BtnIcon icons={faShareFromSquare}/>
                        </div>
                        <div className="uihr__view-holder rr__flex-row">
                            <span className="uihr__view-count citizenship league-spartan-regular">
                                <FontAwesomeIcon icon={faEye} /> {props.viewCount}
                            </span>
                            <BtnIcon icons={faEllipsis}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}