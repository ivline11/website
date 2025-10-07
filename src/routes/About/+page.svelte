<script lang="ts">
  import profileImg from '$lib/images/ktj.png';
</script>

<svelte:head>
  <title>About | Taejeong Kang</title>
  <meta name="description" content="Web3 Builder / Researcher" />
</svelte:head>

<section class="about">
  <h1 class="page-title">About Me</h1>
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

  <div class="profile">
    <img src={profileImg} alt="Taejeong Kang" class="profile-img" />
    <ul>
      <li>🔹 Taejeong Kang</li>
      <li>🔹 Undergraduate at <a href="https://cs.yonsei.ac.kr/" target="_blank" rel="noopener">Yonsei Univ, Computer Science</a></li>
      <li>🔹 Graduate, President at <a href="https://x.com/BlockchainatYU/" target="_blank" rel="noopener">Blockchain at Yonsei</a></li>
      <li>🔹 Research Intern at <a href="https://www.blockmedia.co.kr/" target="_blank" rel="noopener">Blockmedia</a></li>
    </ul>
  </div>

  <hr class="divider" />

  <div class="section-list">
    <div class="card">
      <h2>Research Interests</h2>
      <ul>
        <li>🔹 <strong>Blockchain</strong></li>
        <li>🔹 <strong>Ethereum / Sui / Solana</strong></li>
        <li>🔹 <strong>MEV / DeFi</strong></li>
        <li>🔹 <strong>Stablecoins</strong></li>
        <li>🔹 <strong>Computer Security</strong></li>  
        <li>🔹 <strong>Zero-Knowledge Proof</strong></li> 
        <li>🔹 <strong>AI & AI Agents</strong></li>
        <li>🔹 <strong>AI Security</strong></li>
      </ul>
    </div>

    <div class="card">
      <h2>Skills</h2>
      <ul>
        <li>🔹 <strong>Frontend Development: </strong> JavaScript, TypeScript, React, Next.js, Svelte</li>
        <li>🔹 <strong>System & Backend: </strong> C/C++, Python</li>
        <li>🔹 <strong>Blockchain: </strong> Solidity, Sui Move, Noir</li>
        <li>🔹 <strong>Design Tools: </strong> Figma</li>
        <li>🔹 <strong>Language: </strong> Korean, English</li>
      </ul>
    </div>
  </div>
</section>

<style>
  /* === Base Layout === */
  .about {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem 6rem;
    color: #eaf9ff;
    font-family: "Inter", sans-serif;
    text-align: left;
  }

  h1 {
    font-size: 4rem;
    margin: 0;
    color: #ffffff;
    text-shadow: 0 0 20px rgba(200, 250, 255, 0.5);
    margin-bottom: 3rem;
    animation: shimmer 6s infinite linear;
  }

  @keyframes shimmer {
    0% { text-shadow: 0 0 10px rgba(180, 240, 255, 0.5); }
    50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.9); }
    100% { text-shadow: 0 0 10px rgba(180, 240, 255, 0.5); }
  }

  /* === Profile Section === */
  .profile {
    display: flex;
    align-items: center;
    gap: 5rem;
  }

  .profile-img {
    width: 180px;
    height: 180px;
    border-radius: 30%;
    object-fit: cover;
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 25px rgba(180, 240, 255, 0.25);
    transition: transform 0.6s ease, filter 0.3s ease;
  }

  .profile-img:hover {
    transform: scale(1.08);
    filter: brightness(1.1);
  }

  .profile ul {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 2;
    font-size: 1.4rem;
    color: #ffffff;
  }

  .profile a {
    color: #9de8ff;
    text-decoration: none;
    transition: color 0.3s ease, text-shadow 0.3s ease;
  }

  .profile a:hover {
    color: #bff8ff;
    text-shadow: 0 0 12px rgba(150, 250, 255, 0.6);
  }

  /* === Divider === */
  .divider {
    width: 100%;
    height: 4px;
    border: none;
    background: rgba(255, 255, 255, 0.3);
    margin: 2.5rem 0;
  }

  /* === Section List === */
  .section-list {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
  }

  /* === Card === */
  .card {
    background: rgba(0, 0, 0, 0.08);
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.08);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    max-width: var(--column-width);
    width: 100%;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 35px rgba(200, 250, 255, 0.3);
  }

  .card h2 {
    font-size: 2.5rem;
    margin: 0rem;
    text-shadow: 0 0 10px rgba(160, 255, 255, 0.5);
    font-weight: 600;
  }

  .card ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #ebfaff;
    font-size: 1.3rem;
    line-height: 1.8;
  }

  /* === Responsive === */
  @media (max-width: 768px) {
    .about {
      padding: 2rem 1.5rem 4rem;
    }

    .profile {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .section-list {
      gap: 1.5rem;
    }

    .profile-img {
      width: 200px;
      height: 200px;
    }

    h1 {
      font-size: 2rem;
    }

    .profile ul {
      font-size: 1.1rem;
    }

    .card h2 {
      font-size: 2rem;
    }
  }
</style>
