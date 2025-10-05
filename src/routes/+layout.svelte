<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Sunlight from '$lib/components/Sunlight.svelte';
	import RealOcean from '$lib/components/RealOcean.svelte';
	import Glitter from '$lib/components/Glitter.svelte';
	import '../app.css';
	
	let { children } = $props();

	const dayColors: Record<number, string> = {
  		0: '#FFFFFF', // 일요일 — 깨끗한 하얀색 (햇살 같은 느낌)
  		1: '#DFF6FF', // 월요일 — 하늘+물안개
  		2: '#AEE4FF', // 화요일 — 밝은 하늘빛
  		3: '#7FD8FF', // 수요일 — 맑은 바다색
  		4: '#51C4E7', // 목요일 — 짙은 청록 (바다 깊어지는 느낌)
  		5: '#70A6FF', // 금요일 — 하늘 쪽으로 푸르름
  		6: '#C4E0FF'  // 토요일 — 부드러운 노을빛 파스텔 블루
	};

	const today = new Date().getDay();
	const dynamicColor = dayColors[today];

	onMount(() => {
		document.documentElement.style.setProperty('--color-theme-dynamic', dynamicColor);
	});
</script>


<RealOcean />
<Sunlight />
<Glitter />
<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
</div>

<style>
.app {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	overflow-x: hidden;
	z-index: 1;
	color: white;
}

main {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	width: 100%;
	max-width: 64rem;
	margin: 2rem auto;
	box-sizing: border-box;
}

@media (max-width: 768px) {
	main {
		margin: 1rem auto;
	}
}
</style>
