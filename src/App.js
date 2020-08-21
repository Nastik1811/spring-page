import React from 'react';
import logo from './assets/images/spring-logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/" id="logo-focus" tabindex="1">
          <img alt="Spring" class="block" id="springlogo" src={logo}  />
        </a>
      </header>
    </div>
  );
}

export default App;
