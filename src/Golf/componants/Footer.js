import facebook from "../../img/facebook.png"
import instegram from "../../img/instagram.png"
export default function Footer() {
    return (
        <>
            <footer>
                <a class="navbar-brand" target="true" href="https://www.facebook.com/golfandco/"><img src={facebook} style={{ "marginLeft": "56rem", "width": "2rem", "marginTop": "0.3rem" }}></img></a>
                <a class="navbar-brand" target="true" href="https://www.instagram.com/golf.co/"><img src={instegram} style={{ "marginLeft": "1rem", "width": "2rem", "marginTop": "0.3rem" }}></img></a>
            </footer>
        </>
    )
}