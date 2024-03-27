import aboutMe1 from "../../img/about1.jpg"
import aboutMe2 from "../../img/about2.jpg"
import aboutMe3 from "../../img/about3.jpg"
import about from "../../img/about1.png"


export default function AboutUs() {
    return (
        <>
            <img src={about} style={{ "width": "100%" }}></img>
            <h6 style={{ "marginTop": "2rem", "textAlign": "center" }}>
                GOLF&CO is an old and leading brand in the field of home design, which over the years has become an integral part of the Israeli home, thanks to a rich variety of textile items and designed household items, which includes: bedding, towels, blankets, bathrobes,<br /><br />
                Bath and care products, kitchen and design utensils, housewares, light furniture, electrical products, spa products and a variety of quality gifts in a wide price range.<br /><br />
                Since 1987, we have been working to enable everyone to upgrade and dress up every room in the house according to their personal style and preferences, and to turn dreams into reality through high-quality and innovative items, at affordable prices.<br /><br />
            </h6>
            <div class="aboutImage">
                <img class="about" src={aboutMe1} style={{ "width": "30%" }}></img>
                <img class="about" src={aboutMe2} style={{ "width": "30%" }}></img>
                <img class="about" src={aboutMe3} style={{ "width": "30%" }}></img>
            </div>
            <h6>
                Thanks to the experience we have gained over many years in the field, we know how to identify the needs of the Israeli audience and adapt to them the most accurate and high-quality answer that exists in the market today.<br /><br />
                We do not rest for a moment and continue to bring our customers the hottest innovations and trends.<br /><br />
                Every season, our designers go on a quest for the same trends and innovations, and work to adapt them to the Israeli audience, to the culture and climate in the country.<br /><br />
                We invite you to embark with us on a journey of inspirations, designs and innovations that will bring warmth to every corner around the most important place in the world for you - the home.<br /><br />
                GOLF&CO has about 70 stores nationwide, and belongs to Golf AK Group Ltd., a leading retail company in the field of textiles and home design, fashion and clothing. Golf Group was founded in 1987 and is traded on the Tel Aviv Stock Exchange.
            </h6>
        </>
    )
}