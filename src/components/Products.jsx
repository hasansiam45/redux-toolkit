import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../store/slices/cartSlice";
import { fetchProducts, STATUSES } from "../store/slices/productSlice";
export const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.product);
    const handleAddToCart = (data) => {
        dispatch(addtocart(data));
    };
    useEffect(() => {
        dispatch(fetchProducts('https://fakestoreapi.com/products'));
    }, []);
    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }
    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
  return (
    <div className="productsWrapper">
        {
            products?.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className="btn" onClick={()=>handleAddToCart(product)}>
                        Add to cart
                    </button>
                </div>
            ))
        }
    </div>
  )
}
