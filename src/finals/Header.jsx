import React, { useRef, useState } from "react";
import './style.css'
import './header.css'



function Header(props) {
  return(
    <div className="header-container">
      <div className="notice-header">
        <h1 className="menu-title">게시판</h1>
      </div>
    </div>
  )
}

export default Header;