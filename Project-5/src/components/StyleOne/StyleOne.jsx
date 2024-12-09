import Bag from "../../assets/shopping.svg";
import wishlist from "../../assets/wishlist.svg";
import View from "../../assets/view.svg";

const StyleOne = (props) => {
  const { image, category, rating, ratingtext, name, discountprice, price } =
    props;

  return (
    <>
      <div className="custom-container">
        
        <div class="row">
          <div class="card">
            <div className="card-img">
              <img src={image} alt="product" className="zoom-image"/>
            </div>
            <div className="one-shopping-bag"> <img src={Bag} alt="cart" className="shopping-bag" /> </div>
            <div className="card-img-btn">
              <div className="one-wishlist"><img src={wishlist} alt="wishlist" /></div>
              <div className="one-view"><img src={View} alt="view" /></div>
            </div>
            <div className="card-data">
              <div className="card-category">
                <a href="#">{category}</a>
              </div>
              <div className="card-rating">
                {rating}
                <span>{ratingtext}</span>
              </div>
              <div className="card-name">{name}</div>
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

export default StyleOne;
