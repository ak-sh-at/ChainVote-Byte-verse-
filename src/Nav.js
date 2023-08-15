import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';
const Nav = () => {
  const { loginWithRedirect ,isAuthenticated,user} = useAuth0();
  const { logout } = useAuth0();
  return (  
    <nav className="navbar fixed-top navbar-expand-lg bg-dark-subtle">
  <div className="container-fluid">
    <Link className="navbar-brand font-bold tect-3xl" style={{fontSize:'40px'}} to="/">ChainVote</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-lg-5">
          <Link className="nav-link "  style={{fontSize:'20px'}} to="/">Home</Link>
        </li>
        <li className="nav-item mx-lg-5">
          <Link className="nav-link "style={{fontSize:'20px'}}  to="/about">About</Link>
        </li>
        <li className="nav-item mx-lg-5">
          <Link className="nav-link" style={{fontSize:'20px'}} to="/stats">Stats</Link>
        </li>
        <div className='d-flex lg:m-42'>
          <li className='nav-item d-flex'>{isAuthenticated && <p className='m-auto'>{user.name}</p>}</li>
            <li className="m-auto mx-3">
           {isAuthenticated?(<li className='d-flex '> <button className='m-auto btn btn-primary btn-outline' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button></li>):(<li><button onClick={() => loginWithRedirect()}>Log In</button></li>)}
          </li>
        </div>
      </ul>
    </div>
  </div>
</nav>
    // <div className="navi">
    // <div>
    //   <ul>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/about">About</Link></li>
    //         <li><Link to="/stats">Stats</Link></li>
    //         <li>{isAuthenticated && <p>{user.name}</p>}</li>
    //         <li className="log">
    //           {isAuthenticated?(<li> <button style={{backgroundColor:'blue'}}onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button></li>):(<li><button onClick={() => loginWithRedirect()}>Log In</button></li>)}
    //         </li>
  
    //   </ul>
    // </div>
    // <div>
    // </div>
    // </div>
  )
}

export default Nav