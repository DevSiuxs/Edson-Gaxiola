import React, { useState } from 'react';
import './DepthCarousel.css';

export default function DepthCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="depth-carousel-container">
      <div className="depth-carousel-stage">
        {items.map((item, index) => {
          const offset = (index - activeIndex + items.length) % items.length;
          let positionClass = 'far-right';
          if (offset === 0) positionClass = 'active';
          else if (offset === 1) positionClass = 'right';
          else if (offset === items.length - 1) positionClass = 'left';

          return (
            <div key={item.id} className={`depth-card ${positionClass}`}>
              <a href={item.link || '#'} target="_blank" rel="noreferrer" className="card-link">
                <div className="card-image-wrapper">
                  <span className="card-badge">{item.id}</span>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev} className="control-btn">←</button>
        <button onClick={handleNext} className="control-btn">→</button>
      </div>
    </div>
  );
}
