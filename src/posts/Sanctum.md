---
title: Sanctum, The Unifier of the Solana LST Ecosystem
description: Sanctum, The Unifier of the Solana LST Ecosystem
date: '2025-09-22'
categories:
  - Sanctum, LST
published: true
---

# Sanctum: The Unifier of the Solana LST Ecosystem

### Taejeong Kang
---

## LST (Liquid Staking Token): Overcoming the Drawbacks of Staking

In Proof-of-Stake (PoS), users stake their tokens to the network, delegating them to a Validator and receiving token rewards in return.  
This traditional staking method had the disadvantage of being inconvenient, as assets were locked on the network for a certain period and took time to unstake.

**Liquid Staking** emerged to solve this problem.  
When a user stakes an asset like SOL, the protocol issues a token with a corresponding 1:1 value, known as an **LST (Liquid Staking Token)** — _mSOL_ and _jitoSOL_ are prime examples.  
In other words, a Liquid Staking Token is a swappable token issued against staked assets as collateral.

LST holders can continue to receive staking rewards while simultaneously trading their LSTs freely in DeFi protocols or using them as collateral to generate additional yield.  
With this, it seemed the chronic problem of staking was solved.

---

## The Problem of LST Liquidity Fragmentation

However, the rise of LSTs created another problem.  
As numerous liquid staking protocols issued their own respective LSTs, the liquidity for what is essentially an asset of the same value became scattered across multiple places.

This phenomenon of **liquidity fragmentation** gives rise to the following issues:

- **High Slippage:** When liquidity in a specific LST pool is low, large trades can cause high slippage and increased transaction costs.  
- **Inefficient Capital Utilization:** Capital is dispersed across multiple pools, leading to decreased efficiency.  
- **Complex User Experience:** Users must manually compare swap ratios and liquidity depths among LSTs to find optimal routes.

---

## Sanctum: A Unified Layer for Fragmented Liquidity

**Sanctum** is a _Unified Liquidity Layer_ that integrates Solana’s fragmented LST liquidity into a single, massive pool and enables seamless interaction between them.  
It’s also Solana’s largest **whitelabel LST issuer**, helping partners easily launch their own LSTs while unifying their liquidity at the same time.

Sanctum’s structure consists of three main components:

- **Infinity:** A multi-LST liquidity pool that gathers all LST liquidity in one place.  
- **Router:** Ensures mutual liquidity between LSTs and provides optimal swap routes.  
- **Reserve:** A reserve pool of SOL that supports instant unstaking.

---

## Infinity: A Great Reservoir of LST Liquidity

**Infinity** plays the most crucial role in Sanctum.  
It is a massive liquidity pool that accepts deposits of various LSTs such as _mSOL_ and _jitoSOL_.  
When users deposit any LST into Infinity, they receive a single token called **INF** in return.  
Holding one INF signifies a diversified investment in all LSTs within the pool.

The key feature of Infinity is the **absence of price distortion** from trade size or external market fluctuations.  
This is possible because Infinity references **on-chain data** from each LST protocol to calculate intrinsic SOL value — comparing total staked SOL and total issued LSTs.

To maintain stability, Infinity employs a **dynamic fee structure** that discourages imbalances:
- Trades that rebalance the pool are charged lower fees.  
- Trades that deepen imbalances are penalized with higher fees.

This ensures the pool remains stable even during volatility or liquidity shocks.

---

## Router: The Optimal Navigator for LSTs

While Infinity aggregates liquidity, the **Sanctum Router** makes it usable.

Previously, each LST required its own DEX pool (e.g., Orca or Raydium).  
If liquidity was low, conversions between LSTs or to SOL were practically impossible — a major obstacle for new projects.  
The Router solves this by automatically **unstaking and re-depositing** assets behind the scenes.

When a user swaps one LST for another, the Router:
1. Unstakes SOL from the relevant account.  
2. Deposits new LST into Infinity.  
3. Completes the swap seamlessly in one click.

It also integrates with DEX aggregators like **Jupiter**, automatically finding the optimal route — even when no direct pool exists.  
For example, swapping _XSOL_ → _jitoSOL_ might internally route through SOL using Infinity or Reserve.

---

## Reserve: Instant Unstaking Without the Wait

Converting an LST back to SOL usually requires a **2–4 day unstaking period**, which is problematic for users needing liquidity immediately.  
The **Sanctum Reserve** addresses this with a large SOL reserve.

When a user requests instant unstake:
- The Reserve provides SOL immediately.  
- It temporarily receives the rights to the staked LST.  
- After the unstaking period, it reclaims the SOL to replenish its funds.

This offers **instant liquidity** in exchange for a small fee.  
The Reserve acts as a _last-resort liquidity source_ rather than a regular trading pool.

---

## Sanctum's Two Tokens: INF and CLOUD

The Sanctum ecosystem operates around two key tokens with distinct roles:

### INF
- Proof of deposit for LSTs in Infinity.  
- Its value naturally **increases over time** due to accumulated staking rewards and swap fees.  
- Serves as a **core asset** in the Solana ecosystem, not just a yield token.

### CLOUD
- Governance token for protocol decision-making.  
- Holders vote on:
  - Adding new LSTs to Infinity  
  - Modifying fee structures  
  - Treasury management  
- Also used to reward contributors and incentivize participation.

---

## Sanctum: Opening a New Horizon for Solana DeFi

Sanctum has established itself as **essential infrastructure** in the Solana ecosystem by solving the key challenge of _liquidity unification_.  
It consolidates fragmented liquidity via **Infinity**, and enhances accessibility through **Router** and **Reserve**.

This architecture:
- Improves user convenience  
- Boosts overall **capital efficiency** of Solana DeFi  
- Enables new LST projects to launch without liquidity bottlenecks  

The dual-token system of **INF** and **CLOUD** supports sustainable growth and decentralization.  
Together, they position Sanctum as a **core liquidity hub** powering the next evolution of Solana DeFi.

---
