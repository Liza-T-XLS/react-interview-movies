// == Imports

import React from 'react';

import './header.scss';

import movieIcon from '../../images/movieIcon.png'
// == Component

const Header = () => (
  <div className="header">
    <h1>
      Moviews
    </h1>
    <img className="movieIcon" src={movieIcon} alt="" />
  </div>
);

// == Export

export default Header;
