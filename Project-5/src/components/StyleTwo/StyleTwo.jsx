import Bag from "../../assets/shopping.svg";
import wishlist from "../../assets/wishlist.svg";
import View from "../../assets/view.svg";

const StyleTwo = (props) => {
  const { image, description, rating, name, discountprice, price } =
    props;

  return (
    <>
      <div className="custom-container">
        
        <div class="row">
          <div class="card two-card">
            <div className="card-img">
              <img src={image} alt="product" className="zoom-image"/>
            </div>
            <div className="one-shopping-bag two-shopping-bag"> <img src={Bag} alt="cart" className="shopping-bag" /> </div>
            <div className="card-img-btn">
              <div className="one-wishlist"><img src={wishlist} alt="wishlist" /></div>
              <div className="one-view"><img src={View} alt="view" /></div>
            </div>
            <div className="card-data">
              <div className="card-name">{name}</div>
              <div className="card-desc">
                {description}
              </div>
              <div className="card-rating">
                {rating}
              </div>
              <div className="card-price">
                {discountprice}
                <span>{price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleTwo;