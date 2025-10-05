<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;
  let width: number;
  let height: number;
  let time = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);

    let animationFrame: number;
    function render() {
      if (!ctx) return;
      time += 0.02;
      drawSunlight();
      animationFrame = requestAnimationFrame(render);
    }
    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  });

  function drawSunlight() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    // ☀️ 중앙 햇빛 반사 원
    const gradient = ctx.createRadialGradient(width * 0.15, height * 0.15, 0, width * 0.15, height * 0.15, 250);
    gradient.addColorStop(0, 'rgba(255,255,200,0.6)');
    gradient.addColorStop(0.2, 'rgba(255,255,150,0.4)');
    gradient.addColorStop(0.5, 'rgba(255,255,100,0.2)');
    gradient.addColorStop(1, 'rgba(255,255,100,0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    
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
    display: block;
    z-index: 0; /* RealOcean보다 살짝 위 */
    pointer-events: none;
  }
</style>
