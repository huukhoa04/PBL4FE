import '../assets/css/Button.css'

export default function Button({type, text, onClick}) {
    if(type == "default")
    {
        return(
            <button className="btn__main league-spartan-semibold" onClick={onClick}>
                {text}
            </button>
        )
    }
    else if(type == "default-2")
    { 
        return(
            <button className="btn__main no__bg league-spartan-semibold citizenship" onClick={onClick}>
                {text}
            </button>
        )
    }
    else if(type == "link-type")
    {
        return(
            <button className="btn__main no__bg league-spartan-bold citizenship fs__normal-2" onClick={onClick}>
                {text}
            </button>
        );
    }
}