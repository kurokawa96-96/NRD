"use client";

import { color, radius, space, shadow, font, weight } from "./tokens";

// 報酬回路をイメージした最小限のシグネチャ図形
// 「人それぞれ回路が違う」ことを、アイコンではなく一枚の線画で語る
function RewardCircuit() {
  const nodes = [
    { x: 40, y: 60 },
    { x: 130, y: 20 },
    { x: 220, y: 70 },
    { x: 300, y: 30 },
    { x: 370, y: 85 },
  ];
  const highlighted = 2; // 3番目のノードだけemeraldで強調＝「異なる回路」の象徴

  return (
    <svg
      viewBox="0 0 410 110"
      width="100%"
      style={{ maxWidth: 410, display: "block" }}
      role="img"
      aria-label="人によって異なる報酬回路を表す線画"
    >
      {nodes.slice(0, -1).map((n, i) => (
        <line
          key={i}
          x1={n.x}
          y1={n.y}
          x2={nodes[i + 1].x}
          y2={nodes[i + 1].y}
          stroke={color.border}
          strokeWidth={1.5}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === highlighted ? 7 : 5}
          fill={i === highlighted ? color.emerald : color.surface}
          stroke={i === highlighted ? color.emerald : color.navySoft}
          strokeWidth={1.5}
        />
      ))}
    </svg>
  );
}

function FilledButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        fontFamily: font.body,
        fontSize: 14,
        fontWeight: weight.semibold,
        color: "#fff",
        background: color.navy,
        border: "none",
        borderRadius: radius.md,
        padding: `${space(1.75)} ${space(4)}`,
        cursor: "pointer",
        letterSpacing: "0.02em",
      }}
    >
      {children}
    </button>
  );
}

function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        fontFamily: font.body,
        fontSize: 14,
        fontWeight: weight.semibold,
        color: color.navy,
        background: "transparent",
        border: `1px solid ${color.border}`,
        borderRadius: radius.md,
        padding: `${space(1.75)} ${space(4)}`,
        cursor: "pointer",
        letterSpacing: "0.02em",
      }}
    >
      {children}
    </button>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        background: color.surface,
        border: `1px solid ${color.border}`,
        borderRadius: radius.md,
        padding: space(3.5),
      }}
    >
      <div
        style={{
          fontFamily: font.display,
          fontSize: 16,
          fontWeight: weight.semibold,
          color: color.textPrimary,
          marginBottom: space(1.5),
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: font.body,
          fontSize: 13.5,
          fontWeight: weight.regular,
          color: color.textSecondary,
          lineHeight: 1.9,
        }}
      >
        {body}
      </div>
    </div>
  );
}

export default function NRDLandingPage() {
  return (
    <div style={{ background: color.background, minHeight: "100vh" }}>
      {/* ヘッダー */}
      <header
        style={{
          maxWidth: 880,
          margin: "0 auto",
          padding: `${space(3)} ${space(3)}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: font.display,
            fontSize: 18,
            fontWeight: weight.bold,
            color: color.navy,
            letterSpacing: "0.12em",
          }}
        >
          NRD
        </div>
        <OutlineButton>診断する</OutlineButton>
      </header>

      {/* ヒーロー */}
      <section
        style={{
          maxWidth: 680,
          margin: "0 auto",
          padding: `${space(8)} ${space(3)} ${space(6)}`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: font.body,
            fontSize: 11,
            fontWeight: weight.semibold,
            color: color.textTertiary,
            letterSpacing: "0.24em",
            marginBottom: space(3),
          }}
        >
          NEURAL REWARD DESIGN
        </div>

        <h1
          style={{
            fontFamily: font.display,
            fontSize: 32,
            fontWeight: weight.semibold,
            color: color.textPrimary,
            lineHeight: 1.6,
            letterSpacing: "0.03em",
            margin: 0,
          }}
        >
          人を理解する。
          <br />
          自分を理解する。
        </h1>

        <div
          style={{
            width: 32,
            height: 1,
            background: color.border,
            margin: `${space(4)} auto`,
          }}
        />

        <p
          style={{
            fontFamily: font.body,
            fontSize: 14.5,
            fontWeight: weight.regular,
            color: color.textSecondary,
            lineHeight: 2,
            maxWidth: 440,
            margin: "0 auto",
          }}
        >
          同じ出来事を経験しても、心が動くこと、夢中になること、
          努力を続けられることは人によって異なります。
          その違いを「何に報酬を感じるのか」という視点から探究します。
        </p>

        <div
          style={{
            display: "flex",
            gap: space(1.5),
            justifyContent: "center",
            marginTop: space(5),
          }}
        >
          <FilledButton>診断を始める</FilledButton>
          <OutlineButton>NRDとは</OutlineButton>
        </div>

        <div
          style={{
            marginTop: space(8),
            display: "flex",
            justifyContent: "center",
          }}
        >
          <RewardCircuit />
        </div>
      </section>

      {/* Philosophy */}
      <section
        style={{
          maxWidth: 680,
          margin: "0 auto",
          padding: `${space(6)} ${space(3)}`,
        }}
      >
        <div
          style={{
            fontFamily: font.body,
            fontSize: 11,
            fontWeight: weight.semibold,
            color: color.textTertiary,
            letterSpacing: "0.2em",
            marginBottom: space(3),
            textAlign: "center",
          }}
        >
          PHILOSOPHY
        </div>
        <p
          style={{
            fontFamily: font.display,
            fontSize: 15,
            fontWeight: weight.regular,
            color: color.textPrimary,
            textAlign: "center",
            lineHeight: 1.9,
            marginBottom: space(5),
          }}
        >
          優劣で評価するためではなく、
          <br />
          違いを理解するための共通言語を目指しています。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: space(2),
          }}
        >
          <Card title="自分を理解する" body="何に心が動くのかを知ることから始まります。" />
          <Card title="他者を理解する" body="自分と違う報酬回路を持つ人を、否定せずに知る。" />
          <Card title="違いを尊重する" body="優劣ではなく、種類の違いとして捉え直します。" />
          <Card title="力を発揮できる環境を考える" body="それぞれの回路に合った関わり方を探ります。" />
        </div>
      </section>

      {/* Status */}
      <section
        style={{
          maxWidth: 680,
          margin: "0 auto",
          padding: `${space(5)} ${space(3)} ${space(10)}`,
        }}
      >
        <div
          style={{
            background: color.surface,
            border: `1px solid ${color.border}`,
            borderRadius: radius.md,
            padding: space(4),
            boxShadow: shadow.card,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: space(1),
              marginBottom: space(2),
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: color.emerald,
              }}
            />
            <div
              style={{
                fontFamily: font.body,
                fontSize: 12,
                fontWeight: weight.semibold,
                color: color.navySoft,
                letterSpacing: "0.08em",
              }}
            >
              DEVELOPING
            </div>
          </div>
          <div
            style={{
              fontFamily: font.body,
              fontSize: 13,
              fontWeight: weight.regular,
              color: color.textSecondary,
              lineHeight: 1.9,
            }}
          >
            理論体系・用語定義・報酬回路モデル・診断システム・タイプ理論・活用方法を、
            現在設計・研究しています。
          </div>
        </div>
      </section>
    </div>
  );
}
