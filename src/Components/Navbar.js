import React, { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";

const Navbar = ({setSearchText }) => {

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (search?.length >= 1) {
  //     navigate("/searchpage");
  //   } else {
  //     navigate("/home");
  //   }
  // },[search]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
        <div className="container-fluid">
          <h1>React className</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/home"
                >
                  Props
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/about"
                >
                  State
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/register"
                >
                  Register Form
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/starwars"
                >
                  Star Wars Characters
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/function"
                >
                  Function Component
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
