// import React from "react";

// function Footer() {
//   return <div>Footer</div>;
// }

// export default Footer;

import React from "react";

function Footer() {
  const handleClick = () => {
    alert("Footer");
  };
  return <button onClick={(e) => handleClick()}>Footer</button>;
}

export default Footer;
