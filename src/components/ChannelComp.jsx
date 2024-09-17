import '../assets/css/ChannelComp.css'
export default function ChannelComp(props) {
    function shortenNumber(number) {
        if(number >= 1000000000){
            return (number / 1000000000).toFixed(1) + "B";
        }
        else if (number >= 1000000) {
          // If the number is greater than or equal to 1 million, shorten it to millions.
          return (number / 1000000).toFixed(1) + "M";
        } else if (number >= 1000) {
          // If the number is greater than or equal to 1 thousand, shorten it to thousands.
          return (number / 1000).toFixed(1) + "K";
        } else {
          // Otherwise, return the original number.
          return number;
        }
    }
    const status = props.isOffline;
    if(!status)
        return(
            <div className="cn__comp">
                <div className="left__side-comp">
                    <img src={props.profilePic} className="cn__avatar" />
                    <div className="txt__content-holder">
                        <span className="league-spartan-semibold fs__normal-2">{props.userName}</span>
                        <span className="league-spartan-light fs__small-3">{props.category}</span>
                    </div>
                </div>
            <div className="view__count">
                <div className="live__dot"></div>
                
                <div className="fs__normal-1 league-spartan-semibold">
                    {shortenNumber(props.viewCount)}
                </div>
            </div>
        </div>
        )
    else return(
        <div className="cn__comp">
            <div className="left__side-comp">
                <img src={props.profilePic} className="cn__avatar" />
                <div className="txt__content-holder">
                    <span className="league-spartan-semibold fs__normal-2">{props.userName}</span>
                    
                </div>
            </div>
            <div className="view__count">
                <div className="fs__normal league-spartan-regular">
                    Offline
                </div>
            </div>
        </div>
    )


}