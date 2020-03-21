import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <section class="section">
        <div class="container">
          <h1 class="title">Hello World</h1>
          <p class="subtitle">
            <i class="fas fa-check"></i> My first website with{' '}
            <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    );
  }
}

export default App;
