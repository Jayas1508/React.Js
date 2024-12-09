import Lemon from "../../assets/lemon.jpg";
import Apple from "../../assets/apple.jpg";
import Watermelon from "../../assets/watermelon.jpg";
import StyleTwo from "./StyleTwo";

function StyleTwoProduct() {
  return (
    <div>
      <div className="one-header">
        <h1>Style 2</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore lacus vel facilisis.
        </p>
      </div>
      <div className="custom-container">
        <div class="d-flex">
          <StyleTwo
            image={Lemon}
            rating="★★★★★"
            description="Lorem ipsum dolor adipisicing elit."
            name="Organic Fresh lemon"
            discountprice="$145"
            price="$150"
          />
          <StyleTwo
            image={Apple}
            rating="★★★★☆"
            description="Lorem ipsum dolor adipisicing elit."
            name="Organic Fresh Apple Juice"
            discountprice="$120.25"
            price="$123.25"
          />
          <StyleTwo
            image={Watermelon}
            rating="★★★☆☆"
            description="Lorem ipsum dolor adipisicing elit."
            name="Organic fresh venila farm watermelon 5kg"
            discountprice="$50.30"
            price="$72.60"
          />
        </div>
      </div>
    </div>
  );
}

export default StyleTwoProduct;