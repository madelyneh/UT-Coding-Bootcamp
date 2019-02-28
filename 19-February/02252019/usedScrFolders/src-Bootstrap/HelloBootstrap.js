import React from 'react';

function Navbar () {
  return (
    <nav className="navbar navbar-dark p-3 mb-2 bg-primary">
      <div class="container">
        <a className="navbar-brand " href="../public/favicon.ico" >Navigation</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="../public/favicon.ico">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../public/favicon.ico">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="../public/favicon.ico" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown Menu
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="../public/favicon.ico">Action</a>
                <a className="dropdown-item" href="../public/favicon.ico">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="../public/favicon.ico">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


function Jumbotron () {
  return (<div className="jumbotron">
    <h1 className="display-4">Hello, world!</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr className="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="../public/favicon.ico" role="button">Learn more</a>
    </p>
  </div>);
};

let divStyle = {width: "18rem"} ;

function Card () {
  return (<div className="card" style={divStyle}>
    <img className="card-img-top" src="..." alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="../public/favicon.ico" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>);
};


export {
  Navbar,
  Jumbotron,
  Card 
};