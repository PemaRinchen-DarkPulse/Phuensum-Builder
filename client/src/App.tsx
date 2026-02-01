import { useState } from 'react';
import './App.css';
import project1 from './assets/projects/project1.jpg';
import project2 from './assets/projects/project2.jpg';
import project3 from './assets/projects/project3.jpg';
import project4 from './assets/projects/project4.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="landing-page">
      {/* Navbar (Mock) */}
      <nav className="navbar">
        <div className="logo">Phuensum Builder</div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? "bar open" : "bar"}></div>
          <div className={isMenuOpen ? "bar open" : "bar"}></div>
          <div className={isMenuOpen ? "bar open" : "bar"}></div>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#featured-projects" onClick={() => setIsMenuOpen(false)}>Featured Projects</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#why-choose-us" onClick={() => setIsMenuOpen(false)}>Why Us</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream<br />Home Today</h1>
          <p>Welcome to our real estate agency, where your dream home awaits. Browse our listings and find the perfect property for you.</p>
          <div className="hero-buttons">
            <a href="#featured-projects" className="btn btn-primary" style={{ textDecoration: 'none' }}>View Our Work</a>
          </div>
        </div>
      </header>

      <section id="featured-projects" className="property-match-section">
        <div className="section-header">
          <h2>Our Featured Projects</h2>
          <button className="btn btn-view-all">View All</button>
        </div>
        
        <div className="gallery-grid">
          {/* Main large card (Left) */}
          <div className="gallery-item large-item" style={{backgroundImage: `url(${project1})`}}>
             <span className="heart-icon">♡</span>
          </div>

          {/* Top Middle */}
          <div className="gallery-item medium-item" style={{backgroundImage: `url(${project2})`}}>
             <span className="heart-icon">♡</span>
          </div>
          
          {/* Top Right */}
          <div className="gallery-item small-item" style={{backgroundImage: `url(${project3})`}}>
             <span className="heart-icon">♡</span>
          </div>
          
          {/* Bottom Wide */}
           <div className="gallery-item wide-item" style={{backgroundImage: `url(${project4})`}}>
             <span className="heart-icon">♡</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="services-header">
           <h2>Our <span className="highlight-text">Services</span></h2>
           <p className="services-subtitle">Comprehensive solutions for your dream project</p>
        </div>
        <div className="services-container">
          <div className="service-card">
            <div className="service-card-header">
              <span className="service-number">01</span>
              <h3>Design</h3>
            </div>
            <p>At PBPL, we believe in designing buildings that merge style with functionality.  We understand that the way your building looks is as important as what it does. That is why we work with you to ensure that your project completely reflects your vision whilst being environmentally sustainable. Our top priority is to make your dream become a reality.</p>
          </div>
          <div className="service-card">
             <div className="service-card-header">
              <span className="service-number">02</span>
              <h3>Supervision</h3>
            </div>
            <p>When it comes to construction projects, you need a team you can trust. At our company, we provide top-quality supervision services with a focus on safety compliance. Our experienced professionals are available around the clock to ensure that your project is completed on time and to the highest standards.</p>
          </div>
          <div className="service-card">
             <div className="service-card-header">
              <span className="service-number">03</span>
              <h3>Construction</h3>
            </div>
            <p>Our construction company is proud to offer a comprehensive range of services to both commercial and residential clients. We take pride in delivering construction solutions that are second to none, with a focus on quality, safety, and efficiency. With our expertise and dedication to the craft, we can help your vision become a reality.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="why-choose-section">
        <h2>Why Choose <span className="highlight-text">Phuensum Builder</span></h2>
        <div className="bento-grid">
          <div className="bento-item item-1">
            <h3>End-to-End Solutions</h3>
            <p>We manage every aspect of your project, saving you time and resources.</p>
            <div className="decorative-icon">
              <span className="swirl-icon"></span>
            </div>
          </div>
          
          <div className="bento-item item-2">
            <div className="blur-circle"></div>
            <h3>After-Sales Support</h3>
            <p>We are committed to providing ongoing support & service to address any future needs or concerns.</p>
          </div>
          
          <div className="bento-item item-3">
             <div className="content-overlay">
               <h3>Superior Quality</h3>
               <p>Our partnerships with the best suppliers grant us access to the finest materials, craftsmanship, and quality control processes.</p>
             </div>
          </div>
          
          <div className="bento-item item-4">
             <div className="item-4-content">
                <h3>No Variety Restrictions</h3>
                <p>We partner with any vendor meeting our quality standards, providing the broadest selection of solutions to suit your needs and preferences.</p>
                
                <div className="spacer"></div>

                <h3>Bespoke Solutions</h3>
                <p>We specialize in sourcing custom-made solutions that perfectly match your unique vision and requirements.</p>
             </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="about-text-content">
          <h2>About <span className="highlight-text">Us</span></h2>
          <p>You seek the trusted partner in the world of real estate! We take pride in offering top-notch services for buying, selling, and renting properties in the most sought-after areas—California, San Francisco, and Miami.</p>
          <p>Our agency specializes in finding the perfect homes and commercial properties for our clients. We believe that every transaction marks the beginning of a long-term relationship. Our team of experienced agents is committed to guiding you through every step of the process. From the initial consultation to closing the deal, Your satisfaction is our top priority, and we strive to exceed your expectations with transparency, professionalism, and integrity.</p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="Couple receiving keys" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-content">
            <div className="contact-left">
              <h2>Connect With <span className="highlight-text">Us</span></h2>
              <p>Follow us on social media for updates, market trends, and exclusive property showcases.</p>
              <div className="social-links">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
            
            <div className="contact-right">
              <h2>Get In <span className="highlight-text">Touch</span></h2>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows={4}></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="contact-map">
            <iframe 
              src="https://maps.google.com/maps?q=Jattu+Commerical+Complex,+Thimphu&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="350" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>
      </section>
      
      <footer className="footer fa-copyright">
          <p>© 2026 Phuensum Builder. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;
