import React from 'react';
import Threads from './Threads';
import DepthCarousel from './DepthCarousel';
import { ArrowRight, Mail } from 'lucide-react';
import './App.css';

export default function App() {
  const projects = [
    {
      id: '01 // PROJ',
      title: 'Fintech Dashboard',
      description: 'High-performance financial telemetry and real-time visualization platform.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      link: 'https://github.com'
    },
    {
      id: '02 // PROJ',
      title: 'Developer Portfolio',
      description: 'Editorial dark aesthetic design built for modular scalability.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      link: 'https://github.com'
    }
  ];

  return (
    <div className="portfolio-wrapper">
      {/* Fondo Threads Animado en Blanco */}
      <div className="background-layer">
        <Threads color={[1.0, 1.0, 1.0]} amplitude={0.8} distance={0} />
      </div>

      <main className="ui-content">
        <section className="profile-section">
          <div className="avatar-container">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
              alt="Profile"
              className="avatar-image"
            />
          </div>
          <h1 className="user-name">EDSON GAXIOLA</h1>
          <p className="user-title">SOFTWARE ENGINEER</p>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="https://spotify.com" target="_blank" rel="noreferrer" className="icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-1.02-.42-.84-.18-.6-.84-.42-1.02.6 4.26-1.32 11.28-1.08 15.6 1.44.54.3.72.96.42 1.5-.3.54-.96.72-1.5.42z"/></svg>
            </a>
            <a href="https://store.steampowered.com" target="_blank" rel="noreferrer" className="icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.03 4.524 4.524s-2.03 4.524-4.524 4.524h-.105l-4.076 2.911c0 .052.005.105.005.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>
            </a>
          </div>

          <div className="action-buttons">
            <button className="primary-btn">
              <span>EXPLORE WORK</span>
              <ArrowRight size={18} />
            </button>
            <button className="primary-btn">
              <span>GET IN TOUCH</span>
              <Mail size={18} />
            </button>
          </div>
        </section>

        <section className="archives-section">
          <div className="section-header">
            <h2>SELECTED ARCHIVES</h2>
            <div className="scroll-indicator">
              <span>SCROLL</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Carrusel en profundidad con soporte de enlaces */}
          <DepthCarousel items={projects} />
        </section>
      </main>
    </div>
  );
}
