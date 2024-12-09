import dropdown from "../assets/drop.svg";
import List from "../assets/list.svg";
import phone from "../assets/phone.svg";

const navbar = () => {
  return (
    <>
      <div className="custom-container">
        <nav class="navbar navbar-height navbar-expand-lg border-0 d-flex justify-content-between align-items-center p-0">
          <div>
            <img src={List} alt="list" className="list-logo"/>
          </div>
          <div id="navbarNavDropdown">
            <ul class="navbar-nav main-navbar">
              <li class="nav-item">
                <a class="nav-link text-underline" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <button class="dropdown-button nav-link text-underline">
                    Category
                    <img src={dropdown} className="dropdown-logo" alt="dropdown" />
                  </button>
                  <div class="dropdown-content">
                    <a href="#">Shop Left Sidebar</a>
                    <a href="#">Shop Right Sidebar</a>
                    <a href="#">Full Width</a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <button class="dropdown-button nav-link text-underline">
                    Products
                    <img src={dropdown} className="dropdown-logo" alt="dropdown" />
                  </button>
                  <div class="dropdown-content">
                    <a href="#">Product Left Sidebar</a>
                    <a href="#">Product Right Sidebar</a>
                    <a href="#">Product Full Width</a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <button class="dropdown-button nav-link text-underline">
                    Pages
                    <img src={dropdown} className="dropdown-logo" alt="dropdown" />
                  </button>
                  <div class="dropdown-content">
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Cart</a>
                    <a href="#">Checkout</a>
                    <a href="#">Track Order</a>
                    <a href="#">Wishlist</a>
                    <a href="#">FAQ</a>
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                    <a href="#">Policy</a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <button class="dropdown-button nav-link text-underline">
                    Blog <img src={dropdown} className="dropdown-logo" alt="dropdown" />
                  </button>
                  <div class="dropdown-content">
                    <a href="#">Left Sidebar</a>
                    <a href="#">Right Sidebar</a>
                    <a href="#">Full Width</a>
                    <a href="#">Detail Left Sidebar</a>
                    <a href="#">Detail Right Sidebar</a>
                    <a href="#">Detail Full Width</a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <button class="dropdown-button nav-link text-underline">
                    Elements
                    <img src={dropdown} className="dropdown-logo" alt="dropdown" />
                  </button>
                  <div class="dropdown-content">
                    <a href="#">Products</a>
                    <a href="#">Typography</a>
                    <a href="#">Buttons</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p className="phone"><img src={phone} className="phone-logo" alt="phone" />+91 7600075211</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default navbar;
