import '../assets/css/VideoContent.css'
import TagCard from './TagCard';

export default function VideoContent(props) {
    return(
        <div className="vc__holder">
            <div className="thumbnail" style={{
                backgroundImage: `url(${props.thumbnail})`
            }}>
                <div className="live__tag league-spartan-regular fs__normal-1">LIVE</div>
            </div>

            <div className="vc__content">
                <div className="uinf__holder">
                    <img className="avatar" src={props.profilePic} />
                    <div className="uinf__holder-1">
                        <div className="vc__title league-spartan-semibold fs__normal-2 citizenship">
                            {props.title}
                        </div>
                        <div className="vc__username league-spartan-light fs__small-3 citizenship">
                            {props.userName}
                        </div>
                        <div className="vc__category league-spartan-light fs__small-3 citizenship">
                            {props.category}
                        </div>
                    </div>
                </div>
                <div className="tag__holder rr__flex-row">
                    <TagCard name="English" />
                    <TagCard name="Vietnamese" />
                    <TagCard name="RPG" />
                    
                </div>
            </div>
        </div>
        
    );
}