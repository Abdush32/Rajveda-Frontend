import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./FrontHeader.css"; // Make sure your CSS file is properly imported

function FrontHeader() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div>
      <div className="site-header-wrap">
        <header className="site-header">
          <div className="container">
            <div className="row rowflex">
              <div className="xlg-col-20 logo-clmn">
                <div className="logo-grp">
                  <Link to="/">
                    <img
                      src="/rajveda-logo.png"
                      alt="Rajveda"
                      width={200}
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="mtrigger-icons show-1100">
                  <div className="search">Search</div>
                  <div className="mnav-trigger" onClick={handleClick}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className={`xlg-col-80 nav-clmn ${isActive ? "show" : ""}`}>
                <div className="nav-wrapper">
                  <div className="mnav-trigger show-1100" onClick={handleClick}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <nav className="navigation">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      {/* Add more navigation items here */}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default FrontHeader;
