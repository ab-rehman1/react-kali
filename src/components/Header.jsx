import './../css/header.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="logo-div">
            <h2>
              Awais<span>Motors</span>
            </h2>
          </div>

          <div className="nav-div">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#" className="signup">
                    SignUp
                  </a>
                </li>
                <li>
                  <a href="#" className="login">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
