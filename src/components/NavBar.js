import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map(link => {
    const hrefLink = "/#" + link.toString()
    return <a href={hrefLink} key={link}>{link}</a>
  })

  return (
  <nav>
    {linkElements}
    </nav>
  );
}

export default NavBar;
