import Logo from "../assets/logo.png";
import Seacrh from "../assets/search.svg";
import User from "../assets/user.svg";
import Wishlist from "../assets/wishlist.svg";
import Cart from "../assets/cart.svg";
import Dropdown from "../assets/drop.svg";

const header = () => {
  return (
    <>
      <div className="custom-container">
        <nav class="navbar d-flex justify-content-between align-items-center navbar-expand-lg">
          <div>
            <a class="navbar-brand" href="#">
              <img src={Logo} alt="logo" width="115px" />
            </a>
          </div>
          <div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="d-flex search" role="search">
                <input
                  class="form-control search-input"
                  type="search"
                  placeholder="Search for items..."
                  aria-label="Search"
                />
                <ul class="navbar-nav me-auto">
                  <li class="nav-item dropdown all-categories">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      All Categories
                      <img src={Dropdown} className="dropdown-logo" alt="dropdown" />
                    </a>
                    <ul class="dropdown-menu m-0 p-0">
                      <li>
                        <a class="dropdown-item cat-drop" href="#">
                          All Categories
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Mens
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Womens
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Electronics
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <button class="btn search-btn" type="submit">
                  <img src={Seacrh} alt="search" class="search-logo" />
                </button>
              </form>
            </div>
          </div>
          <div>
            <ul class="navbar-nav me-auto mb-2 user-section mb-lg-0 ">
              <div class="dropdown">
                <button class="dropdown-button nav-link"><img src={User} className="user-logo" alt="user" />Account</button>
                <div class="dropdown-content">
                  <a href="#">Register</a>
                  <a href="#">Checkout</a>
                  <a href="#">Login</a>
                </div>
              </div>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  <img src={Wishlist} class="wish-logo" alt="wishlist" />
                  Wishlist
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-0" href="#">
                  <img src={Cart} class="cart-logo" alt="cart" />
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default header;