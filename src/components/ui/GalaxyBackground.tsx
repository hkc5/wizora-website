import { useEffect, useRef } from 'react';

export const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Galaxy parameters
    const config = {
      starCount: 1500, // reduced for performance
      cloudCount: 80,
      armCount: 3,
      size: 2,
      coreSize: 80,
      spiralTightness: 0.12,
      thickness: 0.35,
      rotationSpeed: 0.0005,
      colors: [
        { r: 147, g: 51, b: 234 }, // Purple
        { r: 236, g: 72, b: 153 }, // Pink
        { r: 59, g: 130, b: 246 }, // Blue
        { r: 168, g: 85, b: 247 }, // Violet
      ]
    };

    // Pre-render cloud sprites for performance and softness
    const cloudSprites: HTMLCanvasElement[] = [];
    
    const createCloudSprite = (r: number, g: number, b: number) => {
      const size = 256; // Texture size
      const spriteCanvas = document.createElement('canvas');
      spriteCanvas.width = size;
      spriteCanvas.height = size;
      const spriteCtx = spriteCanvas.getContext('2d');
      if (!spriteCtx) return spriteCanvas;

      const center = size / 2;
      const gradient = spriteCtx.createRadialGradient(center, center, 0, center, center, center);
      
      // Soft, diffuse gradient - Reduced opacity for subtlety
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.12)`);
      gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.03)`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

      spriteCtx.fillStyle = gradient;
      spriteCtx.fillRect(0, 0, size, size);
      return spriteCanvas;
    };

    // Generate sprites for each color
    config.colors.forEach(c => {
      cloudSprites.push(createCloudSprite(c.r, c.g, c.b));
    });

    class GalaxyElement {
      x: number = 0;
      y: number = 0;
      distance: number;
      angle: number;
      baseAngle: number;
      speed: number;
      randomOffset: number;
      color: string;
      size: number;
      sprite?: HTMLCanvasElement;
      isCloud: boolean;

      constructor(canvasWidth: number, canvasHeight: number, isCloud: boolean) {
        this.isCloud = isCloud;
        
        // Distance calculation:
        // Power 0.6 creates a distribution that is slightly denser at the center than the edges,
        // but not an extreme spike. It's close to a uniform disk but with a gentle center bias.
        const maxDistance = Math.max(canvasWidth, canvasHeight) / 1.0;
        const spreadPower = isCloud ? 0.5 : 0.6; 
        
        const normalizedDist = Math.pow(Math.random(), spreadPower);
        this.distance = normalizedDist * maxDistance;
        
        // Spiral arm calculation
        const spread = isCloud ? config.thickness * 2 : config.thickness;
        const randomOffset = (Math.random() + Math.random() - 1) * spread * Math.PI;
        this.randomOffset = randomOffset;
        
        const armIndex = Math.floor(Math.random() * config.armCount);
        const armAngle = (armIndex / config.armCount) * Math.PI * 2;
        this.baseAngle = armAngle + this.randomOffset;
        
        this.angle = this.distance * config.spiralTightness + this.baseAngle;
        this.speed = config.rotationSpeed * (1 + (50 / (this.distance + 10)));

        const colorIndex = Math.floor(Math.random() * config.colors.length);
        const baseColor = config.colors[colorIndex];

        if (isCloud) {
          this.size = 200 + Math.random() * 300; 
          this.sprite = cloudSprites[colorIndex];
          this.color = ''; 
        } else {
          this.size = Math.random() * config.size;
          
          // Opacity calculation:
          // 1. Fade out at the very edges (sparse edges)
          // 2. Slightly fade the very center to avoid a "white ball" look (too dense)
          const distRatio = this.distance / maxDistance;
          
          // Bell-curve-ish brightness
          // Peak brightness around 0.2 - 0.5 distance
          let brightness = 1;
          if (distRatio < 0.1) {
            brightness = distRatio * 10; // Fade in from center
          } else if (distRatio > 0.6) {
            brightness = 1 - (distRatio - 0.6) * 2.5; // Fade out to edge
          }
          
          const finalBrightness = Math.max(0.1, Math.min(1, brightness));
          
          const r = baseColor.r;
          const g = baseColor.g;
          const b = baseColor.b;
          const alpha = (0.4 + Math.random() * 0.6) * finalBrightness;
          
          this.color = `rgba(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)}, ${alpha})`;
        }
      }

      update(centerX: number, centerY: number) {
        this.angle += this.speed;
        this.x = centerX + Math.cos(this.angle) * this.distance;
        this.y = centerY + Math.sin(this.angle) * this.distance;
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.isCloud && this.sprite) {
          // Draw the soft sprite centered at x,y
          ctx.drawImage(
            this.sprite, 
            this.x - this.size / 2, 
            this.y - this.size / 2, 
            this.size, 
            this.size
          );
        } else {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    let elements: GalaxyElement[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      elements = [];
      // Clouds first
      for (let i = 0; i < config.cloudCount; i++) {
        elements.push(new GalaxyElement(canvas.width, canvas.height, true));
      }
      // Stars on top
      for (let i = 0; i < config.starCount; i++) {
        elements.push(new GalaxyElement(canvas.width, canvas.height, false));
      }
    };

    const animate = () => {
      if (!ctx) return;
      // Respect users who prefer reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.fillStyle = '#020205';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Core Glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, config.coreSize * 8);
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.15)');
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Use additive blending for that "light" feel
      ctx.globalCompositeOperation = 'screen';
      
      elements.forEach(el => {
        el.update(centerX, centerY);
        el.draw(ctx);
      });
      
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(animate);
    };

    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        init();
      }, 300); // Wait 300ms after resize stops before regenerating
    };

    window.addEventListener('resize', debouncedResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full bg-[#020205]"
      style={{ pointerEvents: 'none' }}
      role="img"
      aria-label="Animated galaxy background"
    />
  );
};
