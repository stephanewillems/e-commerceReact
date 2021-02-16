import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    // eslint-disable jsx-props-no-spreading
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    aria-hidden="true"
  >
    {console.log({ history, match, linkUrl })}
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`, // react laat too om style{} te gebruiken waarin objecten toegankelijk zijn om net CSS te gebruiken.
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
