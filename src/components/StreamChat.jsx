import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatComp from "./ChatComp";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

export default function StreamChat(props) {
    const context = "Consequat ex amet quis aliqua duis. Aute sunt cupidatat irure ex anim cillum Lorem culpa. Aute elit commodo occaecat sunt elit culpa qui mollit. Commodo id officia adipisicing pariatur consectetur tempor occaecat."
    return(
        <>
        <div className="stream__chat">
            <div className="sc__header">

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
                    <div className="emoji-selector">
                        <FontAwesomeIcon icon={ faIcons }/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}