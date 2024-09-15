import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

export default function userName(props) {
    return(
        <>
            <NavBar routing="index"/>
            <Sidebar routing="Username" />
        </>
        
    )
}