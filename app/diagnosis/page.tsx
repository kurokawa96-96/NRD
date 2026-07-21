export default function DiagnosisIntroPage() {
  const steps = [
    { label: "質問に答える", body: "いくつかの問いに、直感で答えていただきます。" },
    { label: "傾向を算出する", body: "回答から、何に報酬を感じやすいかの傾向を見ていきます。" },
    { label: "結果を確認する", body: "7つのタイプのうち、あなたに近いものをお伝えします。" },
  ];

  return (
    <div className="min-h-screen bg-canvas py-24">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="font-body text-[11px] font-semibold text-ink-tertiary tracking-[0.24em] mb-4">
          DIAGNOSIS
        </div>
        <h1 className="font-display text-3xl font-semibold text-ink-primary tracking-wide leading-relaxed">
          あなたの報酬回路を知る
        </h1>
        <div className="w-8 h-px bg-line mx-auto my-6" />
        <p className="font-body text-sm text-ink-secondary leading-8 max-w-md mx-auto">
          優劣をつけるためのテストではありません。
          何に心が動くのかを知ることは、自分を否定しないための、はじまりになります。
        </p>

        <div className="mt-16 space-y-4 text-left">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className="flex items-start gap-4 bg-surface border border-line rounded p-5"
            >
              <div className="font-display text-sm text-emerald mt-0.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="font-body text-[13px] font-semibold text-ink-primary mb-1">
                  {step.label}
                </div>
                <div className="font-body text-[12.5px] text-ink-secondary leading-7">
                  {step.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button
            disabled
            className="font-body text-[14px] font-semibold text-white bg-navy/40 rounded px-8 py-3 cursor-not-allowed"
          >
            診断を始める
          </button>
          <div className="font-body text-[11.5px] text-ink-tertiary mt-4">
            現在、設問を準備しております
          </div>
        </div>
      </div>
    </div>
  );
}
