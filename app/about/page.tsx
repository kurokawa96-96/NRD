export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-body text-[11px] font-semibold text-ink-tertiary tracking-[0.24em] mb-4">
            ABOUT
          </div>
          <h1 className="font-display text-3xl font-semibold text-ink-primary tracking-wide">
            NRDとは
          </h1>
        </div>

        <div className="font-body text-[14px] text-ink-secondary leading-9 space-y-8">
          <p>
            NRD（Neural Reward Design）は、人それぞれが持つ報酬回路の違いに着目し、
            人を理解するための理論および設計思想です。
          </p>
          <p>
            私たちは同じ出来事を経験しても、心が動くこと、夢中になること、
            努力を続けられることは人によって異なります。
            NRDでは、その違いを「何に報酬を感じるのか」という視点から探究します。
          </p>

          <div className="pt-4">
            <h2 className="font-display text-lg font-semibold text-ink-primary mb-4">
              Philosophy
            </h2>
            <p className="mb-4">
              NRDは、人を優劣で評価したり、能力を序列化したりするための理論ではありません。
              人それぞれが持つ報酬回路の違いを理解することで、
            </p>
            <ul className="space-y-2 pl-1">
              {[
                "自分を理解する",
                "他者を理解する",
                "違いを尊重する",
                "それぞれが力を発揮できる環境を考える",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-emerald mt-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">そのための共通言語となることを目指しています。</p>
          </div>

          <div className="pt-4">
            <h2 className="font-display text-lg font-semibold text-ink-primary mb-4">
              Vision
            </h2>
            <p>
              NRDは、自己理解から始まり、人間関係、教育、組織、社会へと応用できる理論を目指しています。
              理解は、より良い選択につながる。そして、より良い選択は、より良い人生と社会につながる。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
