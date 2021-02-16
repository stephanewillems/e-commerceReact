import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const Homepage = () => (
  <div className="homepage">
    <Directory history />
  </div>
);

export default Homepage;
