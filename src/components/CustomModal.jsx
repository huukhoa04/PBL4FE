import { useState } from "react"
import Button from "./Button"
import '../assets/css/CustomModal.css'
import BtnIcon from "./BtnIcon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faArrowDown, faArrowUp, faClose, faCross, faVideo } from "@fortawesome/free-solid-svg-icons"
export default function CustomModal(props) {
    if(props.type == "login")
        return (
            <>

            </>
        )
    else if (props.type == "signup")
        return (
            <>
                
            </>
        )
    else if (props.type == "SM"){
        const [option, setOption] =  useState(0);
        const [isClose, setIsClose] = useState(false);
        return(
            <>
                <div className="modal__layout bg__color-2">
                <div className="rr__flex-row rrf__jc-space-between">
                    <span className="rr__flex-row fs__large-1 league-spartan-semibold rrf__col-small rrf__ai-center citizenship"><FontAwesomeIcon icon={faVideo} /> Stream Helper</span>
                    <BtnIcon icons={isClose ? faArrowDown : faArrowUp} onClick={() => setIsClose(!isClose)}/>
                        
                </div>
                {!isClose && (
                    <div className="modal__content-holder rr__flex-col rrf__row-normal">
                        <div className="btn__holder fill__container">
                            <Button type={option == 0 ? "nav-type-clicked" : "nav-type"} text={"Use inline stream source"} onClick={() => setOption(0)}/>
                            <Button type={option == 1 ? "nav-type-clicked" : "nav-type"} text={"Use external streamware"} onClick={() => setOption(1)}/>
                        </div>
                        <div className="rr__flex-col fill__container rrf__row-small">
                            {option == 0 ?
                            <>
                                <span className="fs__normal-3 league-spartan-regular citizenship">Stream Status</span>
                                <pre className="str__status bg__color-00 def-pad-1 citizenship">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eum maiores quae et nesciunt ipsam explicabo quia, odit, commodi voluptatem ea quos nostrum alias expedita velit doloremque perferendis soluta vitae!

                                </pre>
                                <Button type="default" text={"Start"}/>
                            </>
                            :
                            <>
                                <span className="fs__normal-3 league-spartan-regular citizenship fill__container ta__center">External streamware is under development</span>
                            </>
                            }
                        </div>
                    </div>
                )}
            </div>
            </>
        )
    }
    else if(props.type == "SMdesc__setting")
    {
        return(
            <>
                <div className="smd__size rr__flex-col def-pad-1 bg__color-2 rrf__row-normal citizenship">
                    <span className="fs__large-1 league-spartan-semibold"><FontAwesomeIcon icon={faPenToSquare} /> Description</span>
                    <div className="rr__flex-col fill__container rrf__row-normal">
                        <div className="rr__flex-row">
                            <label className="smd__label fs__normal-2 league-spartan-regular">Title</label>
                            <input className="smd__input fs__normal-1 league-spartan-regular fill__container no__bg citizenship" type="text" placeholder="Enter title here..."/>
                        </div>
                        <div className="rr__flex-row">
                            <label className="smd__label fs__normal-2 league-spartan-regular">Category</label>
                            <input className="smd__input fs__normal-1 league-spartan-regular fill__container no__bg citizenship" type="text" placeholder="Search category..."/>
                        </div>
                        <div className="rr__flex-row-reverse">
                            <Button type="default" text="Save" onClick={() => {}}/>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

