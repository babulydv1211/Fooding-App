import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id,name,price,description,image }) => {
  
  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);

    return (
    <div className="food-item">
      <div className="food-item-img-container"> 
        
        <img  className='food-item-image' src={url+"/images/"+image} alt="" /> 

        
      {!cartItems[id] ? (
        <img className='add' 
        onClick={()=>addToCart(id)} 
        src={assets.add_icon_white} 
        alt="Add to cart"
        />
      ) : (
       <div className="food-item-counter">
        <img onClick={()=>removeFromCart(id)} 
        src={assets?.remove_icon_red} 
        alt="Remove from Cart"
        />
        <p>{cartItems[id]}</p>
        <img onClick={()=>addToCart(id)} 
        src={assets?.add_icon_green} 
        alt="Add more to cart"
        />
       </div>
       )}
      </div>


    <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{ name }</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{ description }</p>
        <p className="food-item-price">₹ {price}</p>
      </div>
    </div>
  );
}
// Add PropTypes for validation
FoodItem.propTypes = {
  id: PropTypes.string.isRequired,  // Assuming id is a string
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};


export default FoodItem;