<svelte:head>
	<title>Connect</title>
	<meta name="description" content="Social links" />
</svelte:head>

<script>
</script>

<div class="connect">
    <h1 class="page-title">Connects</h1>
<style>
    .page-title {
        margin-top: 3rem;
        margin-bottom: 2rem;
        font-size: 2.5rem;
        min-height: 3.5rem;
        font-weight: 700;
        text-align: left;
        letter-spacing: -0.02em;
    }
</style>
    <ul>
        <hr />
        <li>
            <a href="https://github.com/ivline11" target="_blank" rel="noopener" class="link">
                Github
                <span class="tooltip">ivline11</span>
            </a>
        </li>
        <hr />
        <li>
            <a href="mailto:ivline11@yonsei.ac.kr" target="_blank" rel="noopener" class="link">
                Email
                <span class="tooltip">ivline11@yonsei.ac.kr</span>
            </a>
        </li>
        <hr />
        <li>
            <a href="https://x.com/ivline70" target="_blank" rel="noopener" class="link">
                X(Twitter)
                <span class="tooltip">ivline70</span>
            </a>
        </li>
        <hr />
        <li>
            <a href="https://www.linkedin.com/in/taejeong-kang-79705b35b/" target="_blank" rel="noopener" class="link">
                LinkedIn
                <span class="tooltip">taejeongkang</span>
            </a>
        </li>
        <hr />
        <li>
            <a href="https://medium.com/@rkdxowjd0215" target="_blank" rel="noopener" class="link">
                Medium
                <span class="tooltip">@rkdxowjd0215</span>
            </a>
        </li>
        <hr />
    </ul>
</div>

<style>
    .connect {
        max-width: 48rem;
		width: 100%;
		margin: 0 auto;
    }

    ul {
        list-style: none;
        margin: 0rem 4rem 0 4rem;
        font-size: 2rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        a {
            font-family: var(--font-body);
            color: var(--color-text-0);
        }

        a:hover {
            color: var(--color-theme-dynamic);
            text-decoration: none;
        }

        li {
            display: flex;
            margin: 0.5rem 0;
        }
    }

    hr {
            border: none;
            height: 1px;
            background-color: #ffffff;
            margin: 1.5rem 0;;
            width: 120%;
        }

    .link {
        position: relative;
        display: inline-block;
        color: var(--color-text-0);
    }

    .tooltip {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 110%;
        transform: translateY(-50%);
        background: rgba(25, 80, 150, 0.7); /* 깊은 바다색 + 투명도 */
        color: #eaf9ff; /* 물빛 텍스트 */
        padding: 0.6rem 1rem;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(100, 200, 255, 0.25),
                    0 0 5px rgba(0, 50, 100, 0.4); /* 수면 반사광 느낌 */
        white-space: nowrap;
        font-size: 0.95rem;
        font-weight: 500;
        letter-spacing: 0.3px;
        transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        backdrop-filter: blur(12px); /* 유리 느낌 */
        border: 1px solid rgba(180, 240, 255, 0.3); /* 은은한 테두리 */
        z-index: 20;
    }


    .tooltip.visible {
        visibility: visible;
        opacity: 1;
        transform: translateY(-50%) scale(1.03);
    }

    .tooltip::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -6px;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent rgba(25, 80, 150, 0.7) transparent transparent;
        filter: drop-shadow(0 0 4px rgba(100, 200, 255, 0.3));
    }


    .link:hover .tooltip {
        visibility: visible;
        opacity: 1;
    }

    h1 {
    font-size: 4rem;
    margin: 0;
    color: #ffffff;
    text-shadow: 0 0 20px rgba(200, 250, 255, 0.5);
    margin-bottom: 0rem;
    animation: shimmer 6s infinite linear;
  }

    @media (max-width: 768px) {
        .connect h1 {
            margin: 0 1rem;
        }

        ul {
            margin: 2rem 2rem 0 2rem;
            font-size: 1.5rem;
        }

        .tooltip {
            display: none;
        }
    }
</style>