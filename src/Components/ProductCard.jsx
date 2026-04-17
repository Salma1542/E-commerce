import "../Pages/Shop/shopPage.css";
import apple from "../assets/images/25.jpg";
import { useNavigate } from "react-router-dom";
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext'; 
export default function ProductCard({items}){
  const { addToCart } = useCart();
const navigate = useNavigate(); 
function goToDetails(){
  navigate(`/product/${items.id}`)
}
const { wishlistItems, addToWishList } = useWishlist();
const isFavorite = wishlistItems.some(fav => fav.id === items.id);
    return(
      
        <>
       
         <div className="h-100 g-3 mt-5">
                        <div className="product-card p-0 mx-0">
                          <img src={items.image_url} alt="" className="productImg" />
                          <div className="quick-actions d-flex gap-2 position-absolute translate-middle-x start-50">
         <button 
        className="btn btn-light rounded-circle quick-btn" 
        onClick={() => addToWishList(items)}
        style={{ color: isFavorite ? 'red' : 'inherit' }} 
      >
        <i className={isFavorite ? "fas fa-heart text-danger" : "far fa-heart"}></i>
      </button>
          <button className="btn btn-light rounded-circle quick-btn" title="Add to Cart" onClick={() => addToCart(items)}>
            <i className="fas fa-shopping-bag"></i>
          </button>
          <button className="btn btn-light rounded-circle quick-btn" title="Quick View" onClick={goToDetails} >
            <i className="far fa-eye"></i>
          </button>
        </div>
                          <div className="product-details">
                            <p className="product-title">{items.name}</p>
                            <p className="price">{items.price}</p>
                            <div
                              className="d-flex align-items-center rating-stars"
                              style={{ gap: "2px" }}
                            >
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                            </div>
                          </div>
                        </div>
                      </div>
        </>
    )
}