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
import { useState } from "react";
import CategoryComp from "./CategoryComp";


export default function Sidebar(props) {
    const [option, setOption] = useState(0);
    if(props.routing == "SM"){
        return(
            <div className="main__position">
                <div className="sidebar">
                    <div className="border__r">
                        <div className="cn__holder rr__flex-col hide__scroll-bar">
                            <div className="sb__label league-spartan-semibold">{props.name}</div>
                            <div className="sb__option-holder">
                                    <SbMenuLabel type={option == 0 ? "toggle" : ""} text="Home" icon={faHouse} onClick={() => setOption(0)}/>
                                    <SbMenuLabel type={option == 1 ? "toggle" : ""} text="Setting up your stream" icon={faTowerBroadcast} onClick={() => setOption(1)}/>
                                    <SbMenuLabel type={option == 2 ? "toggle" : ""} text="Analytics" icon={faBarChart} onClick={() => setOption(2)}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="main__content rr__flex-col">
                    {
                        option == 0 ?
                        <>
                            {/* Home */}
                            <img className="bg__img" src={smBackground} alt="background"/>
                        </>
                        : option == 1 ?
                        <>
                            {/* Setting up stream */}
                            <div className="fl__content-holder rr__flex-col">
                                <span className="league-spartan-semibold fs__title-4 citizenship">Set up your stream source</span>
                                <div className="sh__content-holder rr__flex-row">
                                    <div className="vd__holder">
                                        {/* output of the stream here */}
                                    </div>
                                    
                                </div>
                            </div>
                        </>
                        :
                        <>
                            {/* Analysis */}

                        </>
                        
                    }
                    
                    {/* content here */}
                    
                </div>
            </div>
            
            
        );
    }
    else if(props.routing == "Personalize"){
        return(
            <div className="main__position">
                <div className="sidebar">
                    <div className="border__r">
                        <div className="cn__holder rr__flex-col hide__scroll-bar">
                            <div className="sb__label league-spartan-semibold">{props.name}</div>
                            <div className="sb__option-holder">
                                    <SbMenuLabel text="Home" icon={faHouse}/>
                                    <SbMenuLabel text="Setting up your stream" icon={faTowerBroadcast} />
                            </div>
                        </div>
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
                    <div className="border__r">
                        <div className="cn__holder rr__flex-col hide__scroll-bar">
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
    else if(props.routing == "following"){
        const [flBtn, setFlBtn] = useState(false);
        return(
            <>
                <div className="main__position">
                    <div className="sidebar bg__color-2 rr__flex-row">
                        <div className="border__r">
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
                        <div className="main__content bg__color-00 rr__flex-col">
                            {/* main content here */}
                            <div className="fl__content-holder rr__flex-col">
                                <span className="fl__title fs__title-5 league-spartan-regular citizenship fill__container">Following</span>
                                <div className="btn__holder">
                                    {
                                        flBtn ? (
                                            <>
                                            <Button type={"nav-type-clicked"} text={"Onstreaming"} onClick={() => setFlBtn(flBtn)} />
                                            <Button type={"nav-type"} text={"Followed channels"} onClick={() => setFlBtn(!flBtn)} />
                                            </>
                                        ) : (
                                            <>
                                            <Button type={"nav-type"} text={"Onstreaming"} onClick={() => setFlBtn(!flBtn)} />
                                            <Button type={"nav-type-clicked"} text={"Followed channels"} onClick={() => setFlBtn(flBtn)} />
                                            </>
                                        )
                                    }
                                    
                                </div>
                                <div className="sh__content-holder rr__flex-row">
                                    {flBtn ? (
                                        <>
                                        <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                                        <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                                        </>
                                    ) : (
                                        <>
                                            <ChannelComp type={"default"} profilePic="https://i.imgur.com/neHVP5j.jpg" userBg={"https://i.imgur.com/rbuyoEE.jpg"} userName="Resolved" category="League Of Legends" viewCount={144226}/>
                                            <ChannelComp type={"default"} profilePic="https://i.imgur.com/neHVP5j.jpg" userBg={"https://i.imgur.com/rbuyoEE.jpg"} userName="Resolved" category="League Of Legends" viewCount={144226}/>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
    else if(props.routing == "browsing"){
        const [flBtn, setFlBtn] = useState(false);
        return(
            <>
                <div className="main__position">
                    <div className="sidebar bg__color-2 rr__flex-row">
                        <div className="border__r">
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
                        <div className="main__content bg__color-00 rr__flex-col">
                            {/* main content here */}
                            <div className="fl__content-holder rr__flex-col">
                                <span className="fl__title fs__title-5 league-spartan-regular citizenship fill__container">Browsing</span>
                                <div className="btn__holder">
                                    {
                                        flBtn ? (
                                            <>
                                            <Button type={"nav-type-clicked"} text={"Category"} onClick={() => setFlBtn(flBtn)} />
                                            <Button type={"nav-type"} text={"Live channels"} onClick={() => setFlBtn(!flBtn)} />
                                            </>
                                        ) : (
                                            <>
                                            <Button type={"nav-type"} text={"Category"} onClick={() => setFlBtn(!flBtn)} />
                                            <Button type={"nav-type-clicked"} text={"Live channels"} onClick={() => setFlBtn(flBtn)} />
                                            </>
                                        )
                                    }
                                    
                                </div>
                                <div className="sh__content-holder rr__flex-row">
                                    {flBtn ? (
                                        <>
                                            <CategoryComp cateViewCount={12727} categoryName="Bach Khoa" categoryPic="https://i.imgur.com/tbmr3e8.jpg" />
                                            <CategoryComp cateViewCount={12727} categoryName="Bach Khoa" categoryPic="https://i.imgur.com/tbmr3e8.jpg" />
                                            <CategoryComp cateViewCount={12727} categoryName="Bach Khoa" categoryPic="https://i.imgur.com/tbmr3e8.jpg" />

                                        </>
                                    ) : (
                                        <>
                                            <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                                            <VideoContent title="MY FIRST STREAM" thumbnail="https://i.imgur.com/mUaz2eC.jpg" profilePic="https://i.imgur.com/JcLIDUe.jpg" userName="nauts" category="League Of Legends" />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className="main__position">
                    <div className="sidebar bg__color-2 rr__flex-row">
                        <div className="border__r">
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
                        <div className="main__content bg__color-vid">
                            {/* <img className="bg__img" src={smBackground} alt="background"/> */}
                            <div className="video__holder">
                                <img className="vd__main fill__container" src="https://i.imgur.com/rbuyoEE.jpg"/>
                            </div>
                            <StreamUserInfo userName="Resolved" title="Hello guys" category="osu!" profilePic="https://i.imgur.com/neHVP5j.jpg" viewCount={123492} flCount={12342} />

                        </div>
                        <StreamChat />
                    </div>
                </div>
            </>
        );
    }
}