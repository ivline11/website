<svelte:head>
	<title>Archive</title>
    <meta name="description" content="Blog posts" />
</svelte:head>

<script lang="ts">
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<section>
    <h1>Archive</h1>
	<ul class="column">
		{#each data.posts as post}
            <a href={post.slug} class="title">
                <li class="post">
                    <p class="date">{formatDate(post.date)}</p>
				    <span class="title-text">{post.title}</span>
                </li>
            </a>
            <hr />
		{/each}
	</ul>
</section>

<style>
    section {
        max-width: 48rem;
        width: 100%;
        margin: 0 auto;
        color: var(--color-theme-dynamic);
    }

    .column {
        margin: 3rem auto;
        text-align: left;

        hr {
            border: none;
            height: 1px;
            background-color: var(--color-text-1);
            margin: 0;
            width: 100%;
        }
    }

    ul.column {
        list-style: none;
        padding: 0;
    }

    li.post {
        font-size: 1.75rem;
        padding: 0.5rem 1rem 1rem 1rem;
    }

    li.post:hover {
        background-color: #444444;
        cursor: pointer;
    }

    a.title {
        all: unset;
        text-decoration: none;
        font-family: var(--font-text);
        font-size: 2rem;
        font-weight: 650;
        color: var(--color-theme-dynamic);
        display: block;
    }

    a.title:hover .title-text {
        text-decoration: underline;
    }

    p.date {
        font-size: 0.9rem;
        color: #fafafa;
    }

    li.post:not(:last-child) {
        border-bottom: 1px solid #333333;
        padding-bottom: 1rem;
    }

    @media (max-width: 768px) {
        section h1 {
            margin: 0 1rem;
        }

        li.post {
            font-size: 1.5rem;
        }
    }
</style>