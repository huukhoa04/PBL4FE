import SbMenuLabel from "./SbMenuLabel";
import "../assets/css/Sidebar.css"
import { faBarChart, faHouse, faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
import smBackground from '../assets/img/background_sm-home.png'
import Button from "./Button";
import ChannelComp from "./ChannelComp";
import Background from '../assets/img/Background.jpg';
import VideoContent from "./VideoContent";
import StreamChat from "./StreamChat";
import StreamUserInfo from "./StreamUserInfo";


export default function Sidebar(props) {
    if(props.routing == "SM"){
        return(
            <div className="main__position">
                <div className="sidebar">
                    <div className="sb__label league-spartan-semibold">{props.name}</div>
                    <div className="sb__option-holder">
                            <SbMenuLabel text="Home" icon={faHouse}/>
                            <SbMenuLabel text="Setting up your stream" icon={faTowerBroadcast} />
                            <SbMenuLabel text="Analytics" icon={faBarChart}/>
                    </div>
                </div>
                <div className="main__content">
                    <img className="bg__img" src={smBackground} alt="background"/>
                    {/* content here */}
                    <Button text="button" type="default"/>
                    <ChannelComp isOffline={true} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                </div>
            </div>
            
            
        );
    }
    else if(props.routing == "Account Personalize"){
        return(
            <div className="main__position">
                <div className="sidebar">
                    <div className="sb__label league-spartan-semibold">{props.name}</div>
                    <div className="sb__option-holder">
                            <SbMenuLabel text="Home" icon={faHouse}/>
                            <SbMenuLabel text="Setting up your stream" icon={faTowerBroadcast} />
                    </div>
                </div>
                <div className="main__content">
                    {/* content here */}
                </div>
            </div>
        );
    }
    else if(props.routing == "index"){
        return(
        <div className="main__position">
                <div className="sidebar bg__color-2 rr__flex-row">
                <div className="cn__holder rr__flex-col">
                            <div className="cn__holder-label league-spartan-semibold fs__normal-2">
                                FOLLOWED CHANNELS
                            </div>
                            <div className="cn__holder-comps">
                                {/* map user here */}
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={132326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={132326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={132326}/>
                                <ChannelComp isOffline={true} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={144226}/>
                                <Button type={"link-type"} text={"Show more"} onClick={""}/>
                            </div>
                            <div className="cn__holder-label league-spartan-semibold fs__normal-2">
                                RECOMMENDED CHANNELS
                            </div>
                            <div className="cn__holder-comps">
                                {/* map user here */}
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={132326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={132326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={132326}/>
                                <ChannelComp isOffline={true} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={144226}/>
                                <Button type={"link-type"} text={"Show more"} onClick={""}/>
                            </div>
                        </div>
                </div>
                <div className="main__content bg__color-00">
                    <img src={Background} style={{minHeight: '26em'}} className="fill__container obj-cover"/>
                    <div className="stream__holder rr__flex-col">
                        <div className="sh__label fs__large-3 league-spartan-semibold citizenship">Livestream you may like</div>
                        <div className="sh__content-holder rr__flex-row">
                            {/* map stream here */}
                            <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                            <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                            <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                            <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                            <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                        </div>
                        <div className="btn__holder">
                            <div className="sepe__line"></div>
                            <Button type={"link-type"} text={"Show more"} onClick={""}/>
                            <div className="sepe__line"></div>
                        </div>
                    </div>
                    <div className="stream__holder rr__flex-col">
                        <div className="sh__label fs__large-3 league-spartan-semibold citizenship">Livestream you may like</div>
                        <div className="sh__content-holder rr__flex-row">
                            {/* map stream here */}
                            <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                            <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                            <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                            <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                            <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                        </div>
                        <div className="btn__holder">
                            <div className="sepe__line"></div>
                            <Button type={"link-type"} text={"Show more"} onClick={""}/>
                            <div className="sepe__line"></div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
    else{
        return(
            <>
                <div className="main__position">
                    <div className="sidebar bg__color-2 rr__flex-row">
                        <div className="cn__holder rr__flex-col">
                            <div className="cn__holder-label league-spartan-semibold fs__normal-2">
                                FOLLOWED CHANNELS
                            </div>
                            <div className="cn__holder-comps">
                                {/* map user here */}
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={132326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={132326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={132326}/>
                                <ChannelComp isOffline={true} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={144226}/>
                                <Button type={"link-type"} text={"Show more"} onClick={""}/>
                            </div>
                            <div className="cn__holder-label league-spartan-semibold fs__normal-2">
                                RECOMMENDED CHANNELS
                            </div>
                            <div className="cn__holder-comps">
                                {/* map user here */}
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={132326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={132326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={1326}/>
                                <ChannelComp isOffline={false} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={132326}/>
                                <ChannelComp isOffline={true} profilePic="https://i.imgur.com/neHVP5j.jpg" userName="Resolved" category="League Of Legends" viewCount={144226}/>
                                <Button type={"link-type"} text={"Show more"} onClick={""}/>
                            </div>
                        </div>
                        <div className="main__content bg__color-vid">
                            {/* <img className="bg__img" src={smBackground} alt="background"/> */}
                            <div className="video__holder">
                                <img className="vd__main fill__container" src="https://i.imgur.com/rbuyoEE.jpg" alt="" srcset="" />
                            </div>
                            <StreamUserInfo userName="Resolved" title="Hello guys" category="osu!" profilePic="https://i.imgur.com/neHVP5j.jpg" viewCount={1234} />

                        </div>
                        <StreamChat />
                    </div>
                </div>
            </>
        );
    }
}