
import React from 'react'

export default function Navbar2(props) {
  return (
    <nav class="navbar">
  <div class="container">
    <a href="/" class="navbar-brand">{props.name}</a>
    <ul class="navbar-menu">
      <li class="navbar-item"><a href="/" class="navbar-link">Home</a></li>
      <li class="navbar-item"><a href="/" class="navbar-link">About</a></li>
      <li class="navbar-item"><a href="/" class="navbar-link">Portfolio</a></li>
      <li class="navbar-item"><a href="/" class="navbar-link">Contact</a></li>
    </ul>
  </div>
</nav>

  )
}
Navbar2.defaultProps = {
   name : "write your name here"
  };
  
