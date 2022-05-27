import { useDispatch, useSelector } from "react-redux";
import { removefromcart } from "../store/slices/cartSlice";

export const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const handleRemoveFromCart = (data) => {
        dispatch(removefromcart(data));
    };
  return (
    <div className="cart-page">
        <h2>Cart</h2>
        <div>
        {
            cart?.map(p => (
                <div style={{padding: '10px', backgroundColor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', margin: '10px 0px'}}>
                    <img src={p.image} alt="product" />
                    <span>{p.title}</span>
                    <span>{p.price}</span>
                    <button className="btn" onClick={()=>handleRemoveFromCart(p.id)}>Remove</button>
                </div>            
                ))
        }
        </div>
    </div>
  )
}
