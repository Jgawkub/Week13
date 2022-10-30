import React from "react";
export default class Navbar extends React.Component{
    render(){
        return<div>
        <nav className="navbar navbar-expand-lg back-color">
          <div className="container-fluid text-light">
            <a className="navbar-brand" href="#">Navigation</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                  </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.google.com">TEST</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://wwww.vimeo.com">TEST2</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">ITEM</a></li>
            <li><a className="dropdown-item" href="#">ITEM</a></li>
            <li><a className="dropdown-item" href="#">ITEM</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
// Above is code I grabbed from boostrap to create the generic,navbar on top iof the login page. 


    }
}