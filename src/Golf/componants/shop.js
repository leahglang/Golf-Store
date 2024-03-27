import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions/addToCart";
import { decreaseQty } from "../Redux/actions/decreaseQty";
import productPic from "../../img/products1.jpg"
import cart from "../../img/cart5.PNG"
import { Link } from "react-router-dom";

export default function ShowDetails() {
    const products = useSelector((state) => state.productReducer)
    const dispach = useDispatch();
    return (
        <>
            <img src={productPic} style={{ "width": "100%" }}></img>
            <div id="cards">
                {products.map((item) => (
                    <>
                        <div class="card" style={{ "width": "20rem", "marginTop": "1.5rem" }}>
                            <img class="card-img-top" src={item.image} alt="" />
                            <div class="card-body">
                                <h5 class="card-title" style={{ "color": "#385997" }}>{item.name}</h5>
                                <p class="card-text">{item.description}</p>
                                <p class="card-text">price: {item.price} NIS</p>
                                <p class="card-text">quantity: {item.qty}</p>
                                <a href="#" class="btn btn-outline-dark" onClick={(e) => {
                                    e.preventDefault();
                                    dispach(addToCart(item));
                                    dispach(decreaseQty(item.id, item.qty));
                                }}>Add To Cart</a>
                                <Link to="/Cart" class="btn btn-outline-dark" style={{ "marginLeft": "0.3rem" }}><img src={cart} style={{ "width": "1rem" }} /></Link>
                            </div>
                        </div>
                    </>
                ))
                }
            </div>
        </>
    )
}



