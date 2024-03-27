import { Link } from 'react-router-dom';
import background from "../../img/logo.png"
import heart from "../../img/heart.PNG"
import person from "../../img/person.PNG"
import search from "../../img/search.PNG"


export default function Navigators() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <a class="navbar-brand" href="/"><img src={background} style={{ "marginLeft": "2rem" }}></img></a>
                        <ul class="navbar-nav">
                            <li class="nav-item" aria-current="page">
                                <Link to="/" class="navbar-brand" style={{ "marginLeft": "5rem" }}>Home</Link>
                            </li>
                            <li class="nav-item" aria-current="page">
                                <Link to="/Products" class="navbar-brand" style={{ "marginLeft": "5rem" }}>Products</Link>
                            </li>
                            <li class="nav-item" aria-current="page">
                                <Link to="/AboutUs" class="navbar-brand" style={{ "marginLeft": "5rem" }}>About us</Link>
                            </li>
                            <li class="nav-item" aria-current="page">
                                <Link to="/Cart" class="navbar-brand" style={{ "marginLeft": "5rem" }}>Cart</Link>
                            </li>
                        </ul>
                        <a class="navbar-brand" href="#"><img src={person} style={{ "marginLeft": "45rem", "width": "2rem", "float": "left" }} /></a>
                        <a class="navbar-brand" href="#"><img src={search} style={{ "marginLeft": "3rem", "width": "2rem", "float": "left" }} /></a>
                        <a class="navbar-brand" href="#"><img src={heart} style={{ "marginLeft": "3rem", "width": "2rem", "float": "left" }} /></a>
                    </div>
                </div>
            </nav>
        </>
    )
}



