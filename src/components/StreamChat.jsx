import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatComp from "./ChatComp";
import { faArrowRightFromBracket, faIcons } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import IconOnlyBtn from "./IconOnlyBtn";
import '../assets/css/StreamChat.css'
export default function StreamChat(props) {
    const context = "Consequat ex amet quis aliqua duis. Aute sunt cupidatat irure ex anim cillum Lorem culpa. Aute elit commodo occaecat sunt elit culpa qui mollit. Commodo id officia adipisicing pariatur consectetur tempor occaecat."
    return(
        <>
        <div className="stream__chat">
            <div className="sc__header">
                <IconOnlyBtn icon={ faArrowRightFromBracket }/>
                <span className="fs__normal-2 league-spartan-semibold citizenship">
                    STREAM CHAT
                </span>

            </div>
            <div className="sc__body">
                {/* signalr here */}
                <ChatComp badge={null} timeStamp="15:00" userName="resolved" chatContext={context}/>
                <ChatComp badge={null} timeStamp="15:00" userName="resolved" chatContext={context}/>
                <ChatComp badge={null} timeStamp="15:00" userName="resolved" chatContext={context}/>
            </div>
            <div className="sc__footer">
                <div className="cb__holder">
                    <input className="chat__box" type="text" name="chat__context" id="chat__box" />
                    <IconOnlyBtn icon={ faIcons }/>
                </div>
                <div className="sc__btn-holder">
                    <Button type="default" text="Chat"/>
                </div>
            </div>
        </div>
        </>
    );
}