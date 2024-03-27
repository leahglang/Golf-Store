import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions/addToCart";
import { decreaseQty } from "../Redux/actions/decreaseQty";
import { deleteFromCart } from "../Redux/actions/deleteFromCart"
import { increaseQty } from "../Redux/actions/increaseQty"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import drop from "../../img/drop.png"

export default function ShowDetailsInCart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer)
    const item_cart = (itemCart, item) => {
        if (itemCart === 1) {
            dispatch(deleteFromCart(item))
            return;
        }
        dispatch(addToCart(item));
        dispatch(increaseQty(item.id, item.cart));
    }

    const [cart_, setCart] = useState(0);
    return (
        <>
            <h4 style={{ "width": "100%", "textAlign": "center", "color": "#385997", "marginTop": "1.5rem" }}>Your cart</h4>
            <div >
                <table class="table table-bordered">
                    <tr>
                        <td scope="col">product name</td>
                        <td scope="col">quantity</td>
                        <td scope="col">price</td>
                        <td scope="col">Total price</td>
                        <td scope="col">pictuer</td>
                        <td scope="col"></td>
                    </tr>
                    <tbody>
                        {cart.map((item) => (<>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.cart}</td>
                                <td>{item.price}</td>
                                <td>{item.price * item.cart}</td>
                                <td><img src={item.image} alt="" style={{ "width": "3rem" }} /></td>
                                <td>
                                    <button href="#" class="btn btn-outline-dark" style={{ "marginLeft": "0.5rem" }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(addToCart(item));
                                            dispatch(decreaseQty(item.id, item.qty))
                                            setCart(item.cart)
                                        }}>+</button>

                                    <button href="#" class="btn btn-outline-dark" style={{ "marginLeft": "0.5rem" }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            console.log(item.id);
                                            dispatch(deleteFromCart(item));
                                            console.log(item);
                                        }}><img src={drop} style={{ "width": "1rem" }} /></button>

                                    <button href="#" class="btn btn-outline-dark" style={{ "marginLeft": "0.5rem" }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            item_cart(item.cart, item)
                                            setCart(item.cart)
                                        }}>-</button>
                                </td>
                            </tr>


                        </>))}
                    </tbody>
                </table>
            </div>
            <Link to="/GoToPayment" className="nav-item" class="btn btn-outline-secondary" onClick={(e) => navigate("/Payment")} style={{ "color": "black", "marginLeft": "52rem" }}>for payment</Link>
            <Link to="/Products" className="nav-item" class="btn btn-outline-secondary" style={{ "color": "black", "marginLeft": "1rem" }}>Back to shop</Link>
        </>
    )
}









