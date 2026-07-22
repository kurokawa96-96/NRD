const categories = [
  { id: "business", label: "ビジネス", body: "チーム編成やマネジメントに、報酬回路の違いという視点を取り入れる。" },
  { id: "education", label: "教育", body: "一律の指導ではなく、何にやる気を感じるかに合わせた関わり方を考える。" },
  { id: "career", label: "キャリア", body: "自分の報酬回路に合った働き方・環境を選ぶための手がかりにする。" },
  { id: "relationship", label: "人間関係", body: "近しい相手との違いを、対立ではなく理解のきっかけに変える。" },
  { id: "branding", label: "ブランディング", body: "誰にどう伝われば心が動くのかを、報酬回路の観点から設計する。" },
];

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-canvas py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-body text-[11px] font-semibold text-ink-tertiary tracking-[0.24em] mb-4">
            APPLICATIONS
          </div>
          <h1 className="font-display text-3xl font-semibold text-ink-primary tracking-wide">
            活用例
          </h1>
          <div className="w-8 h-px bg-line mx-auto my-6" />
          <p className="font-body text-sm text-ink-secondary leading-8 max-w-md mx-auto">
            NRDの視点は、自己理解にとどまらず、さまざまな場面に応用できます。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {categories.map((c) => (
            <div
              key={c.id}
              className="bg-surface border border-line rounded p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-display text-base font-semibold text-ink-primary">
                  {c.label}
                </div>
                <span className="font-body text-[10px] font-semibold text-ink-tertiary tracking-[0.08em] bg-canvas border border-line rounded-full px-2.5 py-1">
                  近日公開
                </span>
              </div>
              <p className="font-body text-[12.5px] text-ink-secondary leading-7">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

