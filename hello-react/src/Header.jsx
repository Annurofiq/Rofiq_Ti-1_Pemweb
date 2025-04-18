import React, { useState } from "react";

function Header() {
  const state = useState("ini judul dari state");

  return (
    <div>
      <h3>{state}</h3>
    </div>
  );
}

export default Header;
