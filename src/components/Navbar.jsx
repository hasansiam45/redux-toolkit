import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
export const Navbar = () => {
    const cart = useSelector(state => state.cart);
  return (
    <div className="header">
        <span>
            <Link to="/">Logo</Link>
        </span>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart">Cart <span style={{margin: '0px 10px'}}> {cart.length > 0 ? cart.length : ''} </span> </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
