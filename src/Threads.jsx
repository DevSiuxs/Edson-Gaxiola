import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Verifica si WebGL está disponible en el navegador
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

// Fallback 2D: Red de nodos 3D proyectados con mayor dimensión, brillo y profundidad
function Canvas2DFallback({ color, amplitude }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const r = Math.floor(color[0] * 255);
    const g = Math.floor(color[1] * 255);
    const b = Math.floor(color[2] * 255);

    // Cantidad y distribución en un espacio 3D más amplio
    const numParticles = 65;
    const particles = Array.from({ length: numParticles }, () => ({
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 600,
      z: (Math.random() - 0.5) * 600,
      vx: (Math.random() - 0.5) * 0.6 * amplitude,
      vy: (Math.random() - 0.5) * 0.6 * amplitude,
      vz: (Math.random() - 0.5) * 0.6 * amplitude
    }));

    let rotX = 0;
    let rotY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotX += 0.0012 * amplitude;
      rotY += 0.0022 * amplitude;

      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);

      // Transformación tridimensional y orden de profundidad
      const projected = particles.map((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (Math.abs(p.x) > 350) p.vx *= -1;
        if (Math.abs(p.y) > 350) p.vy *= -1;
        if (Math.abs(p.z) > 350) p.vz *= -1;

        // Rotación 3D
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Proyección perspectiva
        const fov = 400;
        const scale = fov / (fov + z2 + 400);
        const x2D = x1 * scale + width / 2;
        const y2D = y1 * scale + height / 2;

        return { x: x2D, y: y2D, z: z2, scale };
      });

      // Ordenar por Z para dibujarlos correctamente según la profundidad (Painter's Algorithm)
      projected.sort((a, b) => a.z - b.z);

      // Dibujar conexiones entre nodos
      const maxDistance = 140;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Atenuación por distancia y profundidad
            const alpha = (1 - dist / maxDistance) * Math.min(p1.scale, p2.scale) * 0.45;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.lineWidth = 1.3 * Math.min(p1.scale, p2.scale);
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Dibujar nodos luminosos en las intersecciones para darle mayor profundidad 3D
      projected.forEach((p) => {
        if (p.scale > 0.1) {
          const radius = Math.max(0.5, 2.5 * p.scale);
          const alpha = Math.min(1, 0.8 * p.scale);

          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, amplitude]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none'
      }}
    />
  );
}

export default function Threads({ color = [1.0, 1.0, 1.0], amplitude = 1, distance = 0 }) {
  const containerRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // PRIORIDAD 1: Probar WebGL primero
    if (!isWebGLAvailable()) {
      setWebglSupported(false);
      return;
    }

    let renderer;
    let animationFrameId;

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const count = 60;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(color[0], color[1], color[2]),
        transparent: true,
        opacity: 0.3
      });

      const line = new THREE.Line(geometry, material);
      scene.add(line);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        line.rotation.y += 0.0015 * amplitude;
        line.rotation.x += 0.0008 * amplitude;
        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (!container || !renderer) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        if (renderer) renderer.dispose();
      };
    } catch (error) {
      // PRIORIDAD 2: Si WebGL falla al instanciarse en la PC, conmutar a Canvas 2D
      console.warn("WebGL no pudo inicializarse. Cambiando a renderizador secundario Canvas 2D.");
      setWebglSupported(false);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    }
  }, [color, amplitude, distance]);

  // Si no se puede renderizar con WebGL, activa el fallback Canvas 2D mejorado
  if (!webglSupported) {
    return <Canvas2DFallback color={color} amplitude={amplitude} />;
  }

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
