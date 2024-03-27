import pic from "../../img/PIC2.jpg"
import home1 from "../../img/home2.png"
import sale from "../../img/sale.png"
import pic2 from "../../img/towpic2.jpg"
import h1 from "../../img/h1.jpg"
import h2 from "../../img/h2.jpg"
import h3 from "../../img/h3.jpg"
import h4 from "../../img/h4.jpg"



export default function Home() {
    return (
        <>
            <img src={pic2} style={{ "width": "100%" }}></img>
            <img src={pic} style={{ "width": "100%", "marginTop": "0.5rem" }}></img>
            <img src={sale} style={{ "width": "100%" }}></img>
            <img src={home1} style={{ "width": "100%" }}></img>
            <h1 style={{ "textAlign": "center", "fontWeight": "bold", "marginTop": "2rem" }}>Our choices</h1>
            <h4 style={{ "textAlign": "center" }}>Home items we're sure you'll love</h4>
            <div class="aboutImage">
                <img class="hItem" src={h4} ></img>
                <img class="hItem" src={h3} ></img>
                <img class="hItem" src={h2} ></img>
                <img class="hItem" src={h1} ></img>
            </div>

        </>
    )
}