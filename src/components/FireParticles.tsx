import { useEffect, useRef } from 'react';

export default function FireParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    const colors = ['#dc2626', '#ef4444', '#f87171', '#fca5a5', '#991b1b', '#7f1d1d', '#fbbf24'];

    function createParticle() {
      return {
        x: Math.random() * w,
        y: h + 10,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -Math.random() * 2 - 0.5,
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 200 + 100,
      };
    }

    for (let i = 0; i < 80; i++) {
      const p = createParticle();
      p.y = Math.random() * h;
      particles.push(p);
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.vx += (Math.random() - 0.5) * 0.02;

        const lifeRatio = p.life / p.maxLife;
        const currentAlpha = p.alpha * (1 - lifeRatio);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - lifeRatio * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3 * (1 - lifeRatio * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha * 0.15;
        ctx.fill();

        if (p.life >= p.maxLife || p.y < -20) {
          particles[i] = createParticle();
        }
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
