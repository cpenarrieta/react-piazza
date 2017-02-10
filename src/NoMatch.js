import React, { Component } from 'react';

class NoMatch extends Component {
  render() {
    return (
      <div className="invalid-url">
        <div className="invalid-url-content">
          404 - Invalid url
        </div>
      </div>
    );
  }
}

export default NoMatch;
