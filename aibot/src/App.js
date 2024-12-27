// App.jsx
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Website Title</h1>
        <nav className="app-nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main className="app-main">
        <section className="hero-section">
          <h2>Welcome to Our Website</h2>
          <p>Discover our services and offerings.</p>
          <button>Learn More</button>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>Description for Feature 1.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>Description for Feature 2.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 3</h3>
            <p>Description for Feature 3.</p>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
