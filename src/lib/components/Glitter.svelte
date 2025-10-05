<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;
  let width: number;
  let height: number;
  let particles: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function initParticles() {
    particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight * 0.7 + Math.random() * window.innerHeight * 0.3, // 하단만
      size: 0.12 + Math.random() * 0.3,
      alpha: 0.1 + Math.random() * 0.4,
      speed: 0.02 + Math.random() * 0.05
    }));
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    resize();
    initParticles();
    window.addEventListener('resize', resize);

    let animationFrame: number;
    function render() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      drawGlitter();
      animationFrame = requestAnimationFrame(render);
    }
    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  });

  function drawGlitter() {
    if (!ctx) return;

    for (let p of particles) {
      // 미세한 파동
      p.y += Math.sin(Date.now() / 800 + p.x * 0.002) * 0.1;

      // 밝기 변화
      p.alpha += Math.sin(Date.now() / 900 + p.x * 0.01) * 0.015;
      p.alpha = Math.min(Math.max(p.alpha, 0.1), 0.6); // 💡 더 밝게 (최대 0.6)

      // 살짝 더 큰 반사 범위
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 18);
      gradient.addColorStop(0, `rgba(255, 255, 220, ${p.alpha})`);
      gradient.addColorStop(1, `rgba(255, 255, 220, 0)`);

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(p.x, p.y, p.size * 8, 0, Math.PI * 2);
      ctx.fill();
    }
  }
</script>

<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
</style>
