import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      {/* Navbar (Mock) */}
      <nav className="navbar">
        <div className="logo">Phuensum Builder</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Properties</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream<br />Home Today</h1>
          <p>Welcome to our real estate agency, where your dream home awaits. Browse our listings and find the perfect property for you.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
        <div className="hero-stats-card">
          <h3>Who We Are?</h3>
          <p>We offer a range of services including buying, selling, and property management.</p>
          <div className="stats-grid">
            <div className="stat-item">
              <strong>80+</strong>
              <span>Premium Houses</span>
            </div>
            <div className="stat-item">
              <strong>500+</strong>
              <span>Agent Houses</span>
            </div>
            <div className="stat-item">
              <strong>2K+</strong>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>
      </header>

      {/* Property Match Section */}
      <section className="property-match-section">
        <div className="section-header">
          <h2>Discover Your Perfect<br />Property Match</h2>
          <p>Discover Your Perfect Property Match with our expert team, dedicated to finding the ideal home or investment in California, San Francisco, and Miami. We combine deep market knowledge with personalized service to ensure a seamless real estate experience tailored to your needs. Trust us to guide you every step of the way.</p>
        </div>
        
        <div className="gallery-grid">
          {/* Main large card */}
          <div className="gallery-item large-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-600021419b67?auto=format&fit=crop&q=80&w=1600')"}}>
            <div className="property-price-card">
              <div className="price-info">
                <h3>$930,000</h3>
                <p>1231 Garland Street,<br />San Francisco, CA 94110</p>
              </div>
              <div className="property-specs">
                <span>2,200 Sq Ft</span>
                <span>3 Bed</span>
                <span>2 Bath</span>
              </div>
              <div className="arrow-btn">↗</div>
            </div>
          </div>
          
          {/* Smaller grid items */}
          <div className="gallery-item medium-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800')"}}>
             <span className="heart-icon">♡</span>
          </div>
          <div className="gallery-item small-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800')"}}>
             <span className="heart-icon">♡</span>
          </div>
           <div className="gallery-item wide-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800')"}}>
             <span className="heart-icon">♡</span>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-text-content">
          <h2>About <span className="highlight-text">Us</span></h2>
          <p>You seek the trusted partner in the world of real estate! We take pride in offering top-notch services for buying, selling, and renting properties in the most sought-after areas—California, San Francisco, and Miami.</p>
          <p>Our agency specializes in finding the perfect homes and commercial properties for our clients. We believe that every transaction marks the beginning of a long-term relationship. Our team of experienced agents is committed to guiding you through every step of the process. From the initial consultation to closing the deal, Your satisfaction is our top priority, and we strive to exceed your expectations with transparency, professionalism, and integrity.</p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="Couple receiving keys" />
        </div>
      </section>

      {/* Property Showcase Section */}
      <section className="showcase-section">
        <div className="showcase-header">
           <h2>Property Showcase</h2>
           <div className="showcase-filters">
             <button className="filter-btn active">Buy</button>
             <button className="filter-btn">Rent</button>
             <button className="filter-btn">Sell</button>
             <div className="search-bar">
               <input type="text" placeholder="City, Zip, or State" />
               <button className="search-icon">🔍</button>
             </div>
           </div>
        </div>
        
        <div className="showcase-grid">
           <div className="showcase-card">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="House" />
           </div>
           <div className="showcase-card">
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800" alt="House" />
           </div>
           <div className="showcase-card">
              <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=800" alt="House" />
           </div>
           <div className="showcase-card">
              <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800" alt="House" />
           </div>
        </div>
      </section>
      
      <footer className="footer fa-copyright">
          <p>© 2024 Phuensum Builder. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;
