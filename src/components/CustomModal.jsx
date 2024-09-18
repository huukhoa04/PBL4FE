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
    else if (props.type == "SM")
        return(
            <>
            <div className="modal__layout">
                <div className="modal__content-holder rr__flex-col">
                    <div className="btn__holder">
                        
                    </div>
                </div>
            </div>
            </>
        )
}