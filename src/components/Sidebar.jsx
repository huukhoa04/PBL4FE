import SbMenuLabel from "./SbMenuLabel";
import "../assets/css/Sidebar.css";
import {
  faBarChart,
  faEnvelope,
  faHouse,
  faLink,
  faPhone,
  faTowerBroadcast,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import smBackground from "../assets/img/background_sm-home.png";
import Button from "./Button";
import ChannelComp from "./ChannelComp";
import Background from "../assets/img/Background.jpg";
import VideoContent from "./VideoContent";
import StreamChat from "./StreamChat";
import StreamUserInfo from "./StreamUserInfo";
import { useState, useRef } from "react";
import CategoryComp from "./CategoryComp";
import CustomModal from "./CustomModal";
import StatBox from "./StatBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconCard from "./IconCard";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
export default function Sidebar(props) {
  //   const navigate = useNavigate();
  const [option, setOption] = useState(0);
  if (props.routing == "SM") {
    const [isOffline, setOffline] = useState(true);
    return (
      <div className="main__position">
        <div className="sidebar">
          <div className="border__r">
            <div className="cn__holder rr__flex-col hide__scroll-bar">
              <div className="sb__label league-spartan-semibold">
                {props.name}
              </div>
              <div className="sb__option-holder">
                <SbMenuLabel
                  type={option == 0 ? "toggle" : ""}
                  text="Home"
                  icon={faHouse}
                  onClick={() => setOption(0)}
                />
                <SbMenuLabel
                  type={option == 1 ? "toggle" : ""}
                  text="Setting up your stream"
                  icon={faTowerBroadcast}
                  onClick={() => setOption(1)}
                />
                <SbMenuLabel
                  type={option == 2 ? "toggle" : ""}
                  text="Analytics"
                  icon={faBarChart}
                  onClick={() => setOption(2)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main__content rr__flex-col">
          {option == 0 ? (
            <>
              {/* Home */}
              <img className="bg__img" src={smBackground} alt="background" />
            </>
          ) : option == 1 ? (
            <>
              {/* Setting up stream */}
              <div className="fl__content-holder rr__flex-col">
                <span className="league-spartan-semibold fs__title-4 citizenship">
                  Set up your stream source
                </span>
                <br />
                <br />
                <div className="sh__content-holder rr__flex-row">
                  <div className="rr__flex-col rrf__row-normal">
                    <div className="vd__holder bg__color-2 rr__flex-col">
                      {/* output of the stream here */}
                      <span className="fs__title-3 league-spartan-semibold citizenship">
                        Offline
                      </span>
                    </div>
                    <CustomModal type={"SMdesc__setting"} />
                  </div>
                  <div className="rr__flex-col">
                    <CustomModal type={"SM"} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Analysis */}
              <div className="fl__content-holder rr__flex-col def-pad-1">
                <div className="rr__flex-col def-pad-1">
                  <span className="league-spartan-semibold fs__title-5 citizenship fill__container ta__center">
                    Analytics
                  </span>
                  <span className="league-spartan-light fs__normal-3 citizenship fill__container ta__center">
                    Check your stream analytics here
                  </span>
                </div>
                <div class="rr__flex-row rrf__col-normal fill__container">
                  <StatBox value={"123"} label={"Viewers"} />
                  <StatBox value={"123"} label={"Viewers"} />
                  <StatBox value={"123"} label={"Viewers"} />
                  <StatBox value={"123"} label={"Viewers"} />
                  <StatBox value={"123"} label={"Viewers"} />
                </div>
              </div>
            </>
          )}

          {/* content here */}
        </div>
      </div>
    );
  } else if (props.routing == "Personalize") {
    const personalInfoRef = useRef(null);
    const connectionsRef = useRef(null);
    const scrollToPersonalInfo = () => {
      personalInfoRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToConnections = () => {
      connectionsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div className="main__position">
        <div className="sidebar">
          <div className="border__r">
            <div className="cn__holder rr__flex-col hide__scroll-bar rrf__col-normal">
              <div className="sb__label league-spartan-semibold">
                {props.name}
              </div>
              <div className="sb__option-holder">
                <SbMenuLabel
                  text="Account"
                  icon={faUser}
                  onClick={scrollToPersonalInfo}
                />
                <SbMenuLabel
                  text="Connections"
                  icon={faLink}
                  onClick={scrollToConnections}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main__content">
          {/* content here */}
          <div
            ref={personalInfoRef}
            className="fl__content-holder rr__flex-col def-pad-1 rrf__row-normal"
          >
            <div className="rr__flex-col def-pad-1">
              {/* title  */}
              <span className="league-spartan-semibold fs__title-5 citizenship fill__container ta__center">
                Account Settings
              </span>
              <span className="league-spartan-light fs__normal-3 citizenship fill__container ta__center">
                Manage your account info here
              </span>
            </div>
            <div className="rr__flex-col def-pad-1 no__padding-tb rrf__row-small">
              <span className="fs__title-4 league-spartan-regular citizenship no__padding-tb">
                Personal Info
              </span>
              <div className="rr__flex-col rrf__row-normal">
                <span className="fs__normal-2 league-spartan-semibold citizenship">
                  Profile Picture
                </span>
                <CustomModal type={"account__setting profile-pic"} />
                <span className="fs__normal-2 league-spartan-semibold citizenship">
                  Profile Settings
                </span>
                <CustomModal type={"account__setting profile-settings"} />
              </div>
            </div>
            <br />
            <div
              ref={connectionsRef}
              className="rr__flex-col def-pad-1 no__padding-tb rrf__row-small"
            >
              <span className="fs__title-4 league-spartan-regular citizenship no__padding-tb">
                Connections
              </span>
              <div className="rr__flex-col rrf__row-normal">
                <span className="fs__normal-2 league-spartan-semibold citizenship">
                  Email & Phone Number
                </span>
                <div className="rr__flex-col rrf__row-normal">
                  <IconCard
                    iconColor={"ic__default-color"}
                    icon={faPhone}
                    text={"0727727727"}
                    onClick={() => {}}
                  />
                  <IconCard
                    iconColor={"ic__default-color"}
                    icon={faEnvelope}
                    text={"huukhoa04@gmail.com"}
                    onClick={() => {}}
                  />
                </div>
                <span className="fs__normal-2 league-spartan-semibold citizenship">
                  SNS
                </span>
                <div className="rr__flex-col rrf__row-normal">
                  <IconCard
                    iconColor={"ic__facebook"}
                    icon={faFacebook}
                    text={"/resolved.man"}
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/resolved.man",
                        "_blank"
                      )
                    }
                  />
                  <IconCard
                    iconColor={"ic__twitter"}
                    icon={faTwitter}
                    text={"/huukhoa004"}
                    onClick={() =>
                      window.open("https://www.x.com/huukhoa004", "_blank")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.routing == "index") {
    return (
      <div className="main__position">
        <div className="sidebar bg__color-2 rr__flex-row">
          <div className="border__r">
            <div className="cn__holder rr__flex-col hide__scroll-bar">
              <div className="cn__holder-label league-spartan-semibold fs__normal-2">
                FOLLOWED CHANNELS
              </div>
              <div className="cn__holder-comps">
                {/* map user here */}
                <ChannelComp
                  isOffline={false}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={1326}
                />
                <ChannelComp
                  isOffline={false}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={132326}
                />
                <ChannelComp
                  isOffline={false}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={1326}
                />
                <ChannelComp
                  isOffline={false}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={132326}
                />
                <ChannelComp
                  isOffline={false}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={1326}
                />
                <ChannelComp
                  isOffline={false}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={132326}
                />
                <ChannelComp
                  isOffline={true}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={144226}
                />
                <Button type={"link-type"} text={"Show more"} onClick={""} />
              </div>
              <div className="cn__holder-label league-spartan-semibold fs__normal-2">
                RECOMMENDED CHANNELS
              </div>
              <div className="cn__holder-comps">
                {/* map user here */}
                <ChannelComp
                  isOffline={false}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={1326}
                />
                <ChannelComp
                  isOffline={false}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={132326}
                />
                <ChannelComp
                  isOffline={false}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={1326}
                />
                <ChannelComp
                  isOffline={false}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={132326}
                />
                <ChannelComp
                  isOffline={false}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={1326}
                />
                <ChannelComp
                  isOffline={false}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={132326}
                />
                <ChannelComp
                  isOffline={true}
                  profilePic="https://i.imgur.com/neHVP5j.jpg"
                  userName="Resolved"
                  category="League Of Legends"
                  viewCount={144226}
                />
                <Button type={"link-type"} text={"Show more"} onClick={""} />
              </div>
            </div>
          </div>
        </div>
        <div className="main__content bg__color-00">
          <img
            src={Background}
            style={{ minHeight: "26em" }}
            className="fill__container obj-cover"
          />
          <div className="stream__holder rr__flex-col">
            <div className="sh__label fs__large-3 league-spartan-semibold citizenship">
              Livestream you may like
            </div>
            <div className="sh__content-holder rr__flex-row">
              {/* map stream here */}
              <VideoContent
                title="MY FIRST STREAM"
                thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                profilePic="https://i.imgur.com/JcLIDUe.jpg"
                userName="nauts"
                category="League Of Legends"
              />
              <VideoContent
                title="MY FIRST STREAM"
                thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                profilePic="https://i.imgur.com/JcLIDUe.jpg"
                userName="nauts"
                category="League Of Legends"
              />
              <VideoContent
                title="MY FIRST STREAM"
                thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                profilePic="https://i.imgur.com/JcLIDUe.jpg"
                userName="nauts"
                category="League Of Legends"
              />
              <VideoContent
                title="MY FIRST STREAM"
                thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                profilePic="https://i.imgur.com/JcLIDUe.jpg"
                userName="nauts"
                category="League Of Legends"
              />
              <VideoContent
                title="MY FIRST STREAM"
                thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                profilePic="https://i.imgur.com/JcLIDUe.jpg"
                userName="nauts"
                category="League Of Legends"
              />
            </div>
            <div className="btn__holder">
              <div className="sepe__line"></div>
              <Button type={"link-type"} text={"Show more"} onClick={""} />
              <div className="sepe__line"></div>
            </div>
          </div>
          <div className="stream__holder rr__flex-col">
            <div className="sh__label fs__large-3 league-spartan-semibold citizenship">
              Livestream you may like
            </div>
            <div className="sh__content-holder rr__flex-row">
              {/* map stream here */}
              <VideoContent
                title="MY FIRST STREAM"
                thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                profilePic="https://i.imgur.com/JcLIDUe.jpg"
                userName="nauts"
                category="League Of Legends"
              />
              <VideoContent
                title="MY FIRST STREAM"
                thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                profilePic="https://i.imgur.com/JcLIDUe.jpg"
                userName="nauts"
                category="League Of Legends"
              />
              <VideoContent
                title="MY FIRST STREAM"
                thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                profilePic="https://i.imgur.com/JcLIDUe.jpg"
                userName="nauts"
                category="League Of Legends"
              />
              <VideoContent
                title="MY FIRST STREAM"
                thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                profilePic="https://i.imgur.com/JcLIDUe.jpg"
                userName="nauts"
                category="League Of Legends"
              />
              <VideoContent
                title="MY FIRST STREAM"
                thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                profilePic="https://i.imgur.com/JcLIDUe.jpg"
                userName="nauts"
                category="League Of Legends"
              />
            </div>
            <div className="btn__holder">
              <div className="sepe__line"></div>
              <Button type={"link-type"} text={"Show more"} onClick={""} />
              <div className="sepe__line"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.routing == "following") {
    const [flBtn, setFlBtn] = useState(false);
    return (
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
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={true}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={144226}
                  />
                  <Button type={"link-type"} text={"Show more"} onClick={""} />
                </div>
                <div className="cn__holder-label league-spartan-semibold fs__normal-2">
                  RECOMMENDED CHANNELS
                </div>
                <div className="cn__holder-comps">
                  {/* map user here */}
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={true}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={144226}
                  />
                  <Button type={"link-type"} text={"Show more"} onClick={""} />
                </div>
              </div>
            </div>
            <div className="main__content bg__color-00 rr__flex-col">
              {/* main content here */}
              <div className="fl__content-holder rr__flex-col">
                <span className="fl__title fs__title-5 league-spartan-regular citizenship fill__container">
                  Following
                </span>
                <div className="btn__holder">
                  {flBtn ? (
                    <>
                      <Button
                        type={"nav-type-clicked"}
                        text={"Onstreaming"}
                        onClick={() => setFlBtn(flBtn)}
                      />
                      <Button
                        type={"nav-type"}
                        text={"Followed channels"}
                        onClick={() => setFlBtn(!flBtn)}
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        type={"nav-type"}
                        text={"Onstreaming"}
                        onClick={() => setFlBtn(!flBtn)}
                      />
                      <Button
                        type={"nav-type-clicked"}
                        text={"Followed channels"}
                        onClick={() => setFlBtn(flBtn)}
                      />
                    </>
                  )}
                </div>
                <div className="sh__content-holder rr__flex-row">
                  {flBtn ? (
                    <>
                      <VideoContent
                        title="MY FIRST STREAM"
                        thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                        profilePic="https://i.imgur.com/JcLIDUe.jpg"
                        userName="nauts"
                        category="League Of Legends"
                      />
                      <VideoContent
                        title="MY FIRST STREAM"
                        thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                        profilePic="https://i.imgur.com/JcLIDUe.jpg"
                        userName="nauts"
                        category="League Of Legends"
                      />
                    </>
                  ) : (
                    <>
                      <ChannelComp
                        type={"default"}
                        profilePic="https://i.imgur.com/neHVP5j.jpg"
                        userBg={"https://i.imgur.com/rbuyoEE.jpg"}
                        userName="Resolved"
                        category="League Of Legends"
                        viewCount={144226}
                      />
                      <ChannelComp
                        type={"default"}
                        profilePic="https://i.imgur.com/neHVP5j.jpg"
                        userBg={"https://i.imgur.com/rbuyoEE.jpg"}
                        userName="Resolved"
                        category="League Of Legends"
                        viewCount={144226}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (props.routing == "browsing") {
    const [flBtn, setFlBtn] = useState(false);
    return (
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
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={true}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={144226}
                  />
                  <Button type={"link-type"} text={"Show more"} onClick={""} />
                </div>
                <div className="cn__holder-label league-spartan-semibold fs__normal-2">
                  RECOMMENDED CHANNELS
                </div>
                <div className="cn__holder-comps">
                  {/* map user here */}
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={true}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={144226}
                  />
                  <Button type={"link-type"} text={"Show more"} onClick={""} />
                </div>
              </div>
            </div>
            <div className="main__content bg__color-00 rr__flex-col">
              {/* main content here */}
              <div className="fl__content-holder rr__flex-col">
                <span className="fl__title fs__title-5 league-spartan-regular citizenship fill__container">
                  Browsing
                </span>
                <div className="btn__holder">
                  {flBtn ? (
                    <>
                      <Button
                        type={"nav-type-clicked"}
                        text={"Category"}
                        onClick={() => setFlBtn(flBtn)}
                      />
                      <Button
                        type={"nav-type"}
                        text={"Live channels"}
                        onClick={() => setFlBtn(!flBtn)}
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        type={"nav-type"}
                        text={"Category"}
                        onClick={() => setFlBtn(!flBtn)}
                      />
                      <Button
                        type={"nav-type-clicked"}
                        text={"Live channels"}
                        onClick={() => setFlBtn(flBtn)}
                      />
                    </>
                  )}
                </div>
                <div className="sh__content-holder rr__flex-row">
                  {flBtn ? (
                    <>
                      <CategoryComp
                        cateViewCount={12727}
                        categoryName="Bach Khoa"
                        categoryPic="https://i.imgur.com/tbmr3e8.jpg"
                      />
                      <CategoryComp
                        cateViewCount={12727}
                        categoryName="Bach Khoa"
                        categoryPic="https://i.imgur.com/tbmr3e8.jpg"
                      />
                      <CategoryComp
                        cateViewCount={12727}
                        categoryName="Bach Khoa"
                        categoryPic="https://i.imgur.com/tbmr3e8.jpg"
                      />
                    </>
                  ) : (
                    <>
                      <VideoContent
                        title="MY FIRST STREAM"
                        thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                        profilePic="https://i.imgur.com/JcLIDUe.jpg"
                        userName="nauts"
                        category="League Of Legends"
                      />
                      <VideoContent
                        title="MY FIRST STREAM"
                        thumbnail="https://i.imgur.com/mUaz2eC.jpg"
                        profilePic="https://i.imgur.com/JcLIDUe.jpg"
                        userName="nauts"
                        category="League Of Legends"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
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
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={true}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={144226}
                  />
                  <Button type={"link-type"} text={"Show more"} onClick={""} />
                </div>
                <div className="cn__holder-label league-spartan-semibold fs__normal-2">
                  RECOMMENDED CHANNELS
                </div>
                <div className="cn__holder-comps">
                  {/* map user here */}
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={1326}
                  />
                  <ChannelComp
                    isOffline={false}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={132326}
                  />
                  <ChannelComp
                    isOffline={true}
                    profilePic="https://i.imgur.com/neHVP5j.jpg"
                    userName="Resolved"
                    category="League Of Legends"
                    viewCount={144226}
                  />
                  <Button type={"link-type"} text={"Show more"} onClick={""} />
                </div>
              </div>
            </div>
            <div className="main__content bg__color-vid">
              {/* <img className="bg__img" src={smBackground} alt="background"/> */}
              <div className="video__holder">
                <img
                  className="vd__main fill__container"
                  src="https://i.imgur.com/rbuyoEE.jpg"
                />
              </div>
              <StreamUserInfo
                userName="Resolved"
                title="Hello guys"
                category="osu!"
                profilePic="https://i.imgur.com/neHVP5j.jpg"
                viewCount={123492}
                flCount={12342}
              />
            </div>
            <StreamChat />
          </div>
        </div>
      </>
    );
  }
}
