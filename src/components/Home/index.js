import React from 'react';

import './style.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        {this.props.children}
        <footer>&copy; {new Date().getFullYear()} Ribbon, Inc.</footer>
      </div>
    );
  }
}

export default Home;