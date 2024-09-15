import '../assets/svg/Logo.svg'
import ProfileMenu from './ProfileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/css/Navbar.css'
import logo from '../assets/img/Logo__sieufix.png'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
export default function NavBar(props) {
    const route = props.routing;
    if(route == "SM")
    return(
        <>
        <div className="nav__bar">
            <div className="left__ch">
                <img className="n__logo" src={logo} alt="Logo" />
                <div className="lch__title league-spartan-semibold">Stream Manager</div>
            </div>
            <div className="middle__ch">

            </div>
            <div className="right__ch">
                <ProfileMenu userName="Resolved" imgLink="https://i.imgur.com/neHVP5j.jpg" />
            </div>
        </div>
        </>
    )
    else if(route == "index"){
        return(
            <div className="nav__bar bg__color-2">
                <div className="left__ch">
                    <img className="n__logo" src={logo} alt="Logo" />
                    <Button type={"default-2"} text={"Following"}/>
                    <Button type={"default-2"} text={"Browsing"}/>
                    <Button type={"default-2"} text={"More"}/>

                </div>
                <div className="middle__ch">
                    <input className="search__box league-spartan-regular fs__small-3" placeholder='Search' type="search" name="search-s" id="search__box" />
                    <div className="search__btn citizenship">
                        <FontAwesomeIcon icon={ faSearch }/>
                    </div>
                </div>
                <div className="right__ch">
                    <ProfileMenu userName="Resolved" imgLink="https://i.imgur.com/neHVP5j.jpg" />
                </div>
            </div>
        );
    }
}