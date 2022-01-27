import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  const [LogedInUser, setLogedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/shop">
        <img src={logo} alt="logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/review">Review</Link>
        </li>  
         <li className="nav-item">
          <Link className="nav-link" to="/inventory">Inventory</Link>
        </li>
        <li className="nav-item">                
        {LogedInUser.email ?  <button className='btn' onClick={() => setLogedInUser({})}>SignOut</button>
         :  <Link className="nav-link" to="/login">SignIN</Link>
    }
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;