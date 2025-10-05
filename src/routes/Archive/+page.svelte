<script lang="ts">
  import { formatDate } from '$lib/utils';

  // 받아올 포스트 데이터
  let { data } = $props();
</script>

<svelte:head>
  <title>Archive | Taejeong Kang</title>
  <meta name="description" content="Research Notes, Articles, and Web3 Writings" />
</svelte:head>

<section class="archive">
  <h1>Archive</h1>

  <ul class="post-list">
    {#each data.posts as post}
      <li class="post-item">
        <a href={post.slug} class="post-link">
          <div class="post-header">
            <p class="date">{formatDate(post.date)}</p>
            <h2 class="title">{post.title}</h2>
          </div>
          <p class="desc">{post.description || "Read more →"}</p>
        </a>
        <hr />
      </li>
    {/each}
  </ul>
</section>

<style>
  /* ===== Layout ===== */
  .archive {
    max-width: 60rem;
    margin: 0 auto;
    padding: 3rem 2rem 6rem;
    font-family: "Inter", sans-serif;
    color: #eaf9ff;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: #ffffff;
    text-shadow: 0 0 18px rgba(180, 250, 255, 0.6);
    animation: shimmer 5s infinite linear;
  }

  @keyframes shimmer {
    0% { text-shadow: 0 0 10px rgba(150, 230, 255, 0.4); }
    50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.9); }
    100% { text-shadow: 0 0 10px rgba(150, 230, 255, 0.4); }
  }

  /* ===== Posts ===== */
  .post-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .post-item {
    margin-bottom: 2rem;
  }

  .post-link {
    all: unset;
    display: block;
    padding: 1.5rem 1rem;
    border-radius: 12px;
    transition: background 0.3s ease, transform 0.3s ease;
  }

  .post-link:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(150, 230, 255, 0.2);
    cursor: pointer;
  }

  .post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-size: 1.6rem;
    color: #ffffff;
    font-weight: 600;
    margin: 0;
  }

  .date {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .desc {
    font-size: 1rem;
    color: rgba(230, 250, 255, 0.8);
    margin: 0.5rem 0 0 0;
  }

  hr {
    border: none;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 1rem 0 0 0;
  }

  /* ===== Responsive ===== */
  @media (max-width: 768px) {
    .archive {
      padding: 2rem 1.2rem 4rem;
    }

    h1 {
      font-size: 2.2rem;
      margin-bottom: 2rem;
    }

    .title {
      font-size: 1.3rem;
    }

    .desc {
      font-size: 0.9rem;
    }

    .post-link {
      padding: 1rem;
    }
  }
</style>
