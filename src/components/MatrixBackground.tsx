import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - cybersecurity themed
    const chars = '01ADLAH{}[]()<>+-*/=!@#$%^&*αβγδεζηθικλμνξοπρστυφχψω';
    const charArray = chars.split('');

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops with random starting positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationId: number;

    const draw = () => {
      // Create trailing effect with semi-transparent overlay
      ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        // Select random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize + fontSize / 2;
        const y = drops[i] * fontSize;

        // Create gradient effect for each character
        const gradient = ctx.createLinearGradient(x, y - fontSize, x, y + fontSize);
        
        // Vary colors for visual interest
        if (Math.random() > 0.98) {
          // Occasional bright red characters
          gradient.addColorStop(0, 'rgba(220, 38, 38, 0.8)');
          gradient.addColorStop(1, 'rgba(220, 38, 38, 0.2)');
        } else if (Math.random() > 0.95) {
          // Occasional blue characters
          gradient.addColorStop(0, 'rgba(0, 212, 255, 0.6)');
          gradient.addColorStop(1, 'rgba(0, 212, 255, 0.1)');
        } else {
          // Default red characters with varying opacity
          const opacity = Math.random() * 0.3 + 0.1;
          gradient.addColorStop(0, `rgba(220, 38, 38, ${opacity})`);
          gradient.addColorStop(1, `rgba(220, 38, 38, ${opacity * 0.3})`);
        }

        ctx.fillStyle = gradient;
        ctx.fillText(text, x, y);

        // Add subtle glow effect for brighter characters
        if (Math.random() > 0.97) {
          ctx.shadowColor = 'rgba(220, 38, 38, 0.5)';
          ctx.shadowBlur = 10;
          ctx.fillText(text, x, y);
          ctx.shadowBlur = 0;
        }

        // Reset drop to top when it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = -Math.random() * 100;
        }

        // Move drop down
        drops[i] += Math.random() * 0.5 + 0.5;
      }

      animationId = requestAnimationFrame(draw);
    };

    // Start animation
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Cyber Grid Background */}
      <div className="cyber-grid" />
      
      {/* Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ 
          mixBlendMode: 'screen',
          opacity: 0.6
        }}
      />
      
      {/* Additional atmospheric effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.3)_70%)]" />
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </>
  );
};

export default MatrixBackground;