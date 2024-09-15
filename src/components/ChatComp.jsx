import '../assets/css/ChatComp.css'

export default function ChatComp(props) {
    if(props.badge != null)
    return(
        <>
        <div className="chat__comp">
            <span className="league-spartan-light fs__normal-1">{props.timeStamp}</span>
            <span className="league-spartan-semibold fs__normal-1">
                {props.userName}
            </span>
            <span className="league-spartan-regular fs__normal-1">
                {props.chatContext}
            </span>
        </div>
        </>
    );
}