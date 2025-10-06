<script lang="ts">
	import { marked } from "marked";
	import { formatDate } from "$lib/utils";
	import Utterances from "$lib/components/Utterances.svelte";
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<h1>{data.meta.title}</h1>
	<div class="metadata">
		<p>{formatDate(data.meta.date)}</p>
		<a href="/Archive" class="back-link">← Back to Archive</a>
	</div>

	<!-- ✅ Markdown 렌더링 -->
	<div class="content">
		{@html marked.parse(data.content)}
	</div>
</article>

<div class="comments">
	<hr />
	<Utterances repo="0xwonj/comments" issueTerm="pathname" theme="github-dark" label="comment"/>
</div>

<style>
	article {
	max-width: 52rem;
	margin: 2rem auto;
	color: #eaf9ff;
	padding: 2rem 2.5rem;
		
	/* ✅ glass + spacing */
	background: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(12px);
	border-radius: 18px;
	box-shadow: 0 8px 25px rgba(0, 80, 180, 0.25);
	transition: all 0.3s ease;

	/* ✅ 최소 높이 (빈 글일 때 박스 유지) */
	min-height: 60vh;
	min-width: 100vh;;

	/* ✅ 콘텐츠가 적을 때도 세로 중앙 정렬 느낌 */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}

article:has(iframe) {
	/* ✅ iframe 있는 글일 때는 약간 더 여백 */
	padding-bottom: 3rem;
}

/* ✅ 작은 화면에서도 안정적인 레이아웃 유지 */
@media (max-width: 768px) {
	article {
		margin: 2rem 1rem;
		padding: 1.5rem 1.25rem;
		min-height: 70vh;
	}
}


article:hover {
	box-shadow: 0 10px 35px rgba(0, 130, 255, 0.4);
}

.metadata {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.9rem;
	color: #b7dfff;
	margin-bottom: 2rem;
}

.metadata a {
	color: #b7dfff;
	text-decoration: none;
	transition: color 0.2s ease;
}

.metadata a:hover {
	color: #9ae6ff;
	text-shadow: 0 0 10px rgba(150, 230, 255, 0.8);
}

.content :global(p) {
	line-height: 1.8;
	margin-bottom: 1.2rem;
	font-size: 1.05rem;
	color: #f4fcff;
	text-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
}

.content :global(h1),
.content :global(h2),
.content :global(h3) {
	color: #ffffff;
	text-shadow: 0 0 20px rgba(150, 230, 255, 0.5);
	margin-top: 2.5rem;
	margin-bottom: 1rem;
	font-family: "JetBrains Mono", monospace;
}

.content :global(a) {
	color: #94e3ff;
	text-decoration: underline;
	transition: color 0.2s ease;
}

.content :global(a:hover) {
	color: #d0f8ff;
	text-shadow: 0 0 10px rgba(150, 230, 255, 0.6);
}

.content :global(code) {
	background: rgba(255, 255, 255, 0.1);
	padding: 0.2rem 0.4rem;
	border-radius: 6px;
	color: #fffbcc;
	font-family: "JetBrains Mono", monospace;
	font-size: 0.95rem;
}

.content :global(pre) {
	background: rgba(0, 0, 0, 0.25);
	padding: 1rem;
	border-radius: 10px;
	overflow-x: auto;
	color: #cdefff;
	margin: 0;
}

.comments {
	margin: 0;
}

</style>
