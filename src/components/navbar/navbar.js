import React, { useState } from "react"
import "./navbar.css"

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon">
            <i className={click ? "evn evn-times" : "evn evn-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
