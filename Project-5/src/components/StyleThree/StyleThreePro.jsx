import Lemon from "../../assets/lemon.jpg";
import Apple from "../../assets/apple.jpg";
import Watermelon from "../../assets/watermelon.jpg";
import Anar from "../../assets/anar.jpg";
import StyleThree from "./StyleThree";

function StyleThreeProduct() {
  return (
    <div>
      <div className="one-header">
        <h1>Style 3</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore lacus vel facilisis.
        </p>
      </div>
      <div className="custom-container">
        <div class="d-flex">
          <StyleThree
            image={Lemon}
            rating="★★★★★"
            description="Lorem ipsum dolor impicit adipisicing elit."
            name="Organic Fresh lemon"
            discountprice="$145"
            price="$150"
          />
          <StyleThree
            image={Apple}
            rating="★★★★☆"
            description="Lorem ipsum dolor impicit adipisicing elit."
            name="Organic Fresh Apple Juice"
            discountprice="$120.25"
            price="$123.25"
          />
          <StyleThree
            image={Watermelon}
            rating="★★★☆☆"
            description="Lorem ipsum dolor impicit adipisicing elit."
            name="Organic watermelon 5kg"
            discountprice="$50.30"
            price="$72.60"
          />
          <StyleThree
            image={Anar}
            rating="★★★★★"
            description="Lorem ipsum dolor impicit adipisicing elit."
            name="Organic fresh venilla farm"
            discountprice="$120.25"
            price="$123.25"
          />
        </div>
      </div>
    </div>
  );
}

export default StyleThreeProduct;