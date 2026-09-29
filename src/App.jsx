import React from 'react';
import Threads from './Threads';
import DepthCarousel from './DepthCarousel';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import './App.css';


export default function App() {
  const projects = [
    {
      id: '01 // PROJ',
      title: 'Portafolio Edson Gaxiola Hernandez',
      description: 'Developer Portafolio skills',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      link: 'https://portafoliodevsiuxs.netlify.app/'
    },
    {
      id: '02 // PROJ',
      title: 'Tienda de anime',
      description: 'Descubre la mejor tienda de coleccionables, manga y merchandise oficial con animaciones y estilo único.',
      image: 'anime-store.JPG',
      link: 'https://lp-anime-store.web.app/'
    },
    {
      id: '03 // PROJ',
      title: 'taller de motocicletas',
      description: 'Experiencia web interactiva que muestra el diseño dinámico y moderno de una motocicleta.',
      image: 'valentino.jpg',
      link: 'https://motorsport-egh.web.app/'
    },
     {
      id: '03 // PROJ',
      title: 'GYM IA',
      description: 'Gimnasio de vanguardia equipado con biometría, conectividad total y rutinas personalizadas por inteligencia artificial.',
      image: 'gym.webp',
      link: 'https://gym-tech-gh.web.app/'
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
              src="/Edson.jpeg"
              alt="Edson Gaxiola"
              className="avatar-image"
            />
          </div>
          <h1 className="user-name">EDSON GAXIOLA</h1>
          <p className="user-title">SOFTWARE ENGINEER</p>

         <div className="social-links">
  {/* GitHub */}
  <a href="https://github.com/DevSiuxs/" target="_blank" rel="noreferrer" className="icon-btn">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/edson22_gax/" target="_blank" rel="noreferrer" className="icon-btn">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  </a>

  {/* Spotify (Corregido) */}
  <a href="https://open.spotify.com/playlist/6LL8mDme56og9xE7YWddTm" target="_blank" rel="noreferrer" className="icon-btn">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.341c-.217.357-.682.469-1.039.252-2.846-1.738-6.428-2.13-10.648-1.166-.407.094-.811-.161-.905-.568-.094-.407.161-.811.568-.905 4.622-1.056 8.583-.608 11.772 1.347.357.218.469.683.252 1.04zm1.472-3.275c-.273.444-.858.586-1.302.313-3.255-1.999-8.219-2.581-12.069-1.413-.501.152-1.031-.131-1.183-.632-.152-.501.131-1.031.632-1.183 4.398-1.335 9.866-.69 13.609 1.611.444.273.586.858.313 1.302zm.127-3.41c-3.905-2.319-10.347-2.533-14.103-1.393-.6.183-1.238-.162-1.421-.762-.183-.6.162-1.238.762-1.421 4.312-1.309 11.424-1.052 15.894 1.6 0.54.32.718 1.02.398 1.56-.32.541-1.02.718-1.53.396z" />
    </svg>
  </a>

  {/* WhatsApp (Nuevo) */}
  <a href="https://wa.me/52558093517" target="_blank" rel="noreferrer" className="icon-btn">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  </a>

  {/* Steam */}
  <a href="https://steamcommunity.com/profiles/76561199197929185/" target="_blank" rel="noreferrer" className="icon-btn">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.03 4.524 4.524s-2.03 4.524-4.524 4.524h-.105l-4.076 2.911c0 .052.005.105.005.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
    </svg>
  </a>
</div>

          <div className="action-buttons">
            <a href="https://ipn-escuela-de-atletismo.web.app/"
            className="primary-btn"
            target="_blank" ><span> Escuela de  atletismo (IPN)</span> <ArrowRight size={18} />
            </a>
            <a href="https://lista-de-tareas-khaki.vercel.app/"
            className="primary-btn"
            target="_blank" ><span> Tu lista de tareas personal</span> <ArrowRight size={18} />
            </a>

          </div>
        </section>

        <section className="archives-section">
          <div className="section-header">
            <h2>Ver Proyectos</h2>
            <div className="scroll-indicator">
              <span></span>
              <ArrowDown size={16} />
            </div>
          </div>

          {/* Carrusel en profundidad con soporte de enlaces */}
          <DepthCarousel items={projects} />
        </section>
      </main>
    </div>
  );
}
