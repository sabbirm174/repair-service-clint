import React,{useContext} from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import { MyContext } from './../../App';
import './header.css'
const Header = () => {

  const [loggedInUser] = useContext(MyContext)



    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Tufani Riders</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse page navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/">Destination <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/">Blog <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/">Contact <span class="sr-only">(current)</span></Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      {loggedInUser.email ? loggedInUser.name : <Link to='/login'>Log in</Link>}
    </form>
  </div>
</nav>
    );
};

export default Header;