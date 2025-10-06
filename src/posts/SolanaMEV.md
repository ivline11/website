---
title: Solana MEV Defi와 Jito를 중심으로
description: Solana MEV Defi와 Jito를 중심으로
date: '2025-08-31'
categories:
  - Solana, MEV
published: true
---


# Solana MEV Defi와 Jito를 중심으로

### Taejeong Kang

**본 아티클은 [Helius의 Solana MEV Report](https://www.helius.dev/blog/solana-mev-report#jito)를 참고하여 국문으로 다시 쓴 아티클입니다.**

---

## 목차
1. 전통적 MEV  
2. 솔라나에서의 MEV  
3. Jito-Solana Client  
4. JitoSOL  
5. 결론  
6. 참고문헌  

---

## 1. 전통적 MEV

### 블록체인에서 MEV(Maximal Extractable Value)란?
MEV는 **트랜잭션 순서를 조작함으로써 얻어낼 수 있는 가치**를 말합니다.  
트랜잭션 순서 조작은 블록 내 트랜잭션의 **추가, 제거, 재배치**를 의미하며,  
어떤 형태의 MEV든 모두 **트랜잭션 순서**에 의존합니다.

### 전통적 MEV 방식
MEV는 원래 *Miner Extractable Value*의 약자였습니다.  
이는 MEV가 PoW 기반의 비트코인에서의 채굴자(miner)에만 국한되는 것이 아닌,  
검증자(validator)가 블록을 제안하는 PoS 기반의 이더리움에도 적용되기 때문입니다.  
현재는 이를 포괄적으로 표현하기 위해 **Maximal Extractable Value**로 정의합니다.

일반적인 비트코인과 이더리움에서는 블록 생성자들이 멤풀(mempool)에 대기 중인 트랜잭션들을 모아 블록을 생성합니다.  
이 블록은 네트워크에 전파되고 검증을 거쳐 체인에 추가됩니다.  
하지만 트랜잭션이 제출된 순서대로 처리된다는 보장은 없습니다.

블록 생성자는 멤풀 내 트랜잭션 중 어떤 것을 블록에 포함시킬지 선택할 수 있고,  
**가스비가 높은 순서로 정렬**하는 것이 일반적이지만 필수 규칙은 아닙니다.  
결과적으로 블록 생성자는 트랜잭션을 임의로 재배치하여 **추가적인 가치를 추출**할 수 있습니다.  
이를 MEV라고 합니다.

### 전통적 MEV의 구성요소
- **Searcher** : 온체인 활동을 모니터링하며, 다른 트랜잭션 앞이나 뒤에 자신의 거래를 배치해 가치를 추출합니다.  
- **Builder** : Searcher가 만든 트랜잭션 묶음(bundle)을 모아 전체 블록을 구성합니다.  
- **Relayer** : Builder가 완성한 블록을 블록 생산자에게 전달합니다.  

### MEV 사례
#### Frontrunning & Sandwich Attacks
프런트러닝 봇은 멤풀에서 큰 거래를 감지해 그 앞에 자신의 거래를 배치하고,  
이후 백런(backrun) 거래로 자산을 매도해 차익을 실현합니다.  
이로 인해 사용자는 불리한 가격에 거래하게 됩니다.  
특히 **Sandwich Attack**은 사용자가 가장 큰 피해를 보는 대표적 형태입니다.

#### Exchange Arbitrage & Liquidations
MEV는 DEX 간 차익 거래를 수행할 때도 발생합니다.  
아비트라지 봇은 한 거래소에서 낮은 가격에 매수하고 다른 거래소에서 높은 가격에 매도해 이익을 얻습니다.  
이 과정에서 **수수료 경쟁**이 발생하며, 다른 사용자의 거래 기회를 빼앗기도 합니다.

#### Generalized Frontrunning
Searcher가 멤풀에서 발견한 유리한 트랜잭션을 그대로 복제해,  
**더 높은 수수료**를 설정하고 **자신의 주소로 바꿔치기**하여 먼저 실행시키는 방식입니다.

---

## 2. 솔라나에서의 MEV

솔라나의 MEV는 다른 체인과는 다르게 작동합니다.  
이는 솔라나의 독특한 구조 — **멤풀이 없고, Turbine·SWQoS 구조를 활용한 빠른 블록 처리** — 덕분입니다.  
따라서 기존의 프런트러닝 MEV는 제한적이며, MEV 포착 방식 또한 달라집니다.

### Liquidations
담보 자산 가격 하락으로 담보 비율이 기준 이하로 떨어지면 누구나 청산 트랜잭션을 실행할 수 있습니다.  
청산자는 빚의 일부를 대신 갚고, 담보 일부를 보상으로 받습니다.  
이 과정은 프로토콜 안정성에 기여하므로 **건전한 형태의 MEV**로 평가됩니다.

### Arbitrage
동일 자산의 체인 내·외 거래소 간 가격 차이를 이용한 거래입니다.  
특히 솔라나에서는 **원자적 차익거래(Atomic Arbitrage)** 형태로 주로 발생합니다.  
이는 두 거래가 하나의 트랜잭션 내에서 동시에 실행되어 리스크가 없습니다.

### Backrun Transaction Example
2024년 1월 10일, 약 **890만 달러 규모의 DogWifHat(WIF)** 거래가 발생하며 큰 백런이 실행되었습니다.  
Searcher는 **Jito Bundle**을 통해 블록에 자신의 번들을 포함시켰고, **890 SOL의 팁**을 제출했습니다.  
이 과정에서 약 **195만 달러**의 이익을 얻었습니다.

### Sandwich Attack
솔라나에서도 존재하지만, 멤풀이 없기 때문에 구조가 다릅니다.  
슬리피지를 높게 설정한 트레이더들이 주요 대상이 됩니다.  
트레이더가 0.33 SOL로 스왑을 진행할 때, MEV Bot은 동일 자산을 선매수 후 매도하여  
**0.02 SOL의 차익**을 얻었습니다.

### NFT Minting Competition
NFT 민팅 이벤트 직후 MEV 기회가 폭발적으로 생기며,  
대규모 봇 경쟁이 네트워크 과부하를 일으켜 블록 생성이 중단된 사례도 있습니다.

---

## 3. Jito-Solana Client

Jito는 2022년 8월 런칭되어 현재 **Solana의 공식 MEV 인프라**로 자리잡았습니다.

### MEV 민주화
기존 MEV는 소수 검증자와 서처에게만 수익이 집중되어  
네트워크 중앙화와 악성 MEV 문제를 유발했습니다.  
Jito는 이를 완화하고 MEV 수익이 네트워크 전반에 공정하게 분배되도록 설계되었습니다.

> The Jito Foundation is excited to open source Jito-Solana,  
> the first third-party, MEV-boosted validator client for Solana.

### 구조
- **Jito Validator** : 트랜잭션을 **Jito Relayer**로 전달  
- **Relayer** : 200ms 동안 트랜잭션을 저장 및 필터링  
- **Jito Block Engine** : Searcher·Relayer·Validator 간 오프체인 경매 실행  

모든 트랜잭션 조합을 시뮬레이션하고,  
**가장 높은 수익의 번들**을 선택해 블록에 포함시킵니다.  
이 경매 과정은 **스팸 제거**와 **수익 극대화**에 기여했습니다.

### 성과
- 2024년 기준 **30억 개 이상 번들 처리**  
- **3.75M SOL 팁 분배**  
- 일일 번들량 **3M → 24M (8배 증가)**  
- 사용자 수 **2만 → 93.8만 명**  
- 검증자 점유율 **92%**

---

## 4. JitoSOL

**JitoSOL**은 Jito-Solana Client의 MEV 보상을  
사용자에게 분배하기 위해 등장한 **Liquid Staking Token (LST)** 입니다.

### 구조
- 사용자는 SOL을 **Jito Stake Pool**에 예치 → JitoSOL 수령  
- MEV 보상과 스테이킹 보상을 **동시에 획득**  
- 스테이킹 위임은 오직 **Jito 클라이언트를 실행하는 검증인**에게만 이루어짐

### Stake Pools and Liquid Staking
Stake Pool은 여러 검증인 노드의 집합입니다.  
사용자는 예치 후 **즉시 LST(JitoSOL)** 을 수령하며, 이를 DeFi에서 활용할 수 있습니다.

### 효과
- 일반 사용자도 **MEV 보상 참여 가능**  
- 검증자는 **수익 극대화**  
- 네트워크는 **건전성 강화 및 탈중앙화 촉진**

결국 JitoSOL은 **사용자-검증자-네트워크 모두가 이익을 얻는 구조**를 만들어냈습니다.

---

## 5. 결론

Solana에서 MEV는 단순한 트레이딩 기법이 아닌  
**네트워크 효율성과 사용자 경험의 핵심 요소**로 자리잡았습니다.

Jito는 MEV를 **민주화**하여 검증자·서처뿐 아니라 일반 사용자에게도 수익을 공유하게 만들고,  
네트워크 혼잡과 스팸 문제를 완화했습니다.

2025년 현재 Jito는 전체 검증자의 **92% 이상이 사용하는 표준 클라이언트**로 자리 잡았으며,  
JitoSOL은 **MEV 수익 + 스테이킹 보상**을 제공하는 새로운 모델로 평가받고 있습니다.

특히 Jito의 번들 경매 구조는  
블록 공간을 **경제적·거버넌스적 자원 분배 문제**로 재정의했으며,  
MEV 민주화의 새로운 기준을 제시했습니다.  
이 모델은 향후 다른 체인에도 적용될 가능성이 높습니다.

---

## 6. 참고문헌
- https://chain.link/education-hub/maximal-extractable-value-mev  
- https://www.helius.dev/blog/solana-mev-report#solana-mev-timeline  
- https://docs.jito.wtf/lowlatencytxnsend/#how-does-the-system-work  
- https://www.jito.wtf/blog/  
- https://www.jito.network/ko/blog/jito-solana-is-now-open-source/  
- https://www.jito.network/ko/docs/jitosol/introduction-to-jito/  
- https://www.umbraresearch.xyz/writings/mev-on-solana  
- https://jito-foundation.gitbook.io  
- https://www.flashbots.net/  
- https://cointelegraph.com/learn/articles/what-is-mev-ethereums-invisible-tax  
