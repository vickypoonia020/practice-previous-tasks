import React, {useState} from 'react';
import Home from './Home';
import About from './About';

export function Navigation() {
  const [page, setPage] = useState("home");

  function handlePageChange(newPage) {
    setPage(newPage);
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/" onClick={() => handlePageChange("Home")}>
              Home
            </a>
          </li>
          <li>
            <a href="/" onClick={() => handlePageChange("About")}>
              About
            </a>
          </li>
          {/* <li>
            <a href="#" onClick={() => handlePageChange("contact")}>
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
      {page === "Home" && <Home />}
      {page === "About" && <About />}
      {/* {page === "contact" && <Contact />} */}
    </div>
  );
}
