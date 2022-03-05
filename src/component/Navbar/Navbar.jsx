import React from "react";

const NavBar = (props) => {
  return (
    <>
      <nav className="nav__container">
        <button className="nav__menu--trigger">Menu &#x25BC;</button>
        <ul className="nav__menu__links">
          <li>Home</li>
          <li>Storybooks</li>
          <li>Games</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
