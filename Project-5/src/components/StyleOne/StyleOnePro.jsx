import StyleOne from "./StyleOne";
import Hazelnut from "../../assets/hazelnut.jpg";
import Apple from "../../assets/apple.jpg";
import Watermelon from "../../assets/watermelon.jpg";
import Almond from "../../assets/almond.jpg";

function StyleOneProduct() {
  return (
    <div>
      <div className="one-header">
        <h1>Style 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore lacus vel facilisis.
        </p>
      </div>
      <div className="custom-container">
        <div class="d-flex">
          <StyleOne
            image={Hazelnut}
            rating="★★★★★"
            ratingtext="(5.0)"
            category="Snacks"
            name="Best snakes with hazel nut pack 200gm"
            discountprice="$145"
            price="$150"
          />
          <StyleOne
            image={Apple}
            rating="★★★★☆"
            ratingtext="(4.5)"
            category="Fruits"
            name="Fresh organic apple 1kg simla marming"
            discountprice="$120.25"
            price="$123.25"
          />
          <StyleOne
            image={Watermelon}
            rating="★★★☆☆"
            ratingtext="(3.2)"
            category="Fruits"
            name="Organic fresh venila farm watermelon 5kg"
            discountprice="$50.30"
            price="$72.60"
          />
          <StyleOne
            image={Almond}
            rating="★★★★★"
            ratingtext="(5.0)"
            category="Snacks"
            name="Sweet crunchy nut mix 250gm pack"
            discountprice="$120.25"
            price="$123.25"
          />
        </div>
      </div>
    </div>
  );
}

export default StyleOneProduct;