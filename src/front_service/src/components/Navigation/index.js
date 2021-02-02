import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import * as routes from '../../constants/routes';
import SignOutButton from '../SignOut';

const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
    <div class="container-fluid">
    <img src="https://i.ibb.co/s2hjsVp/gold-hammer-removebg-preview.png" alt="" width="30" height="24" class="d-inline-block align-top"/>
      <a class="navbar-brand" href={routes.LANDING}>FeliX</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><Link href={routes.HOME}><a class="nav-link">Home</a></Link></li>
          <li class="nav-item"><Link href={routes.ADDOFFER}><a class="nav-link">Add Offer</a></Link></li>
          <li class="nav-item"><Link href={routes.ACCOUNT}><a class="nav-link">Account</a></Link></li>
        </ul>
      </div>
      
      <ul class="nav navbar-nav pull-right">
          <li><SignOutButton /></li>
        </ul>
    </div>
  </nav>

const NavigationNonAuth = () =>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
    <div class="container-fluid">
      <img src="https://i.ibb.co/s2hjsVp/gold-hammer-removebg-preview.png" alt="" width="30" height="24" class="d-inline-block align-top"/>
      <a class="navbar-brand" href={routes.LANDING}>FeliX</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <ul class="nav navbar-nav pull-right">
        <li ><Link href={routes.SIGN_IN}><a class="btn btn-outline-warning navbar-right ">Sign In</a></Link></li>
      </ul>
    </div>
  </nav>
  

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);