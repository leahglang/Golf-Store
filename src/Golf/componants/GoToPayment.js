import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Payment() {
    useEffect(() => {
        alert("Do you want to pay?")
    })
    const cart = useSelector((state) => state.cartReducer)
    const navigate = useNavigate();
    let sum = 0;
    cart.forEach(element => {
        sum += (element.price * element.cart)
    });


    return (
        <>

            <table class="table table-bordered">
                <tr>
                    <td scope="col">product name</td>
                    <td scope="col">pictuer</td>
                    <td scope="col">quantity</td>
                    <td scope="col">price</td>
                    <td scope="col">for payment</td>
                </tr>
                <tbody>
                    {cart.map((item) => (<>
                        <tr>
                            <td>{item.name}</td>
                            <td><img src={item.image} alt="" style={{ "width": "3rem" }} /></td>
                            <td>{item.cart}</td>
                            <td>{item.price}</td>
                            <td>{item.price * item.cart}</td>
                        </tr>
                    </>))}
                </tbody>
            </table>
            <h1 style={{ "marginLeft": "2rem" }}>Total payment:{sum}</h1>
            <button class="btn btn-outline-secondary" style={{ "color": "black", "marginLeft": "56.3rem" }}>pay now</button>
        </>
    )
}


