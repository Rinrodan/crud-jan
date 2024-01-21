
import Login, { LogOut } from "./pages/landing/login";
import logo from "./logo.png";


export default function Header() {

    return (
        <div class="row col-md-12">
            <a href="/" class="col-sm-2">
                <img src={logo} height={75} alt="Recipe Logo"/>
            </a>
            <div class="col"></div>
            <div classs="col">
            {/* <Login /> */}
            <LogOut />
            </div>


        </div>
    )
}