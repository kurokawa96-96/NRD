export default function CompatibilityIntroPage() {
  return (
    <div className="min-h-screen bg-canvas py-24">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="font-body text-[11px] font-semibold text-ink-tertiary tracking-[0.24em] mb-4">
          COMPATIBILITY
        </div>
        <h1 className="font-display text-3xl font-semibold text-ink-primary tracking-wide leading-relaxed">
          タイプ同士の関わり方
        </h1>
        <div className="w-8 h-px bg-line mx-auto my-6" />
        <p className="font-body text-sm text-ink-secondary leading-8 max-w-md mx-auto">
          相性の良し悪しを決めるものではありません。
          報酬回路が違う相手と、どう関わればお互いの力を発揮できるかを考えるための視点です。
        </p>

        <div className="mt-16 bg-surface border border-line rounded p-6 text-left">
          <div className="font-body text-[13px] font-semibold text-ink-primary mb-2">
            例えば
          </div>
          <p className="font-body text-[12.5px] text-ink-secondary leading-7">
            Structure Type（秩序を重視するタイプ）と Instant Type（刺激を求めるタイプ）は、
            対立しやすい組み合わせに見えるかもしれません。ですがNRDでは、
            それを「相性が悪い」ではなく「補い合える関係」として捉え直すことを目指しています。
          </p>
        </div>

        <div className="mt-16">
          <button
            disabled
            className="font-body text-[14px] font-semibold text-white bg-navy/40 rounded px-8 py-3 cursor-not-allowed"
          >
            2つのタイプを選んで見る
          </button>
          <div className="font-body text-[11.5px] text-ink-tertiary mt-4">
            現在、関係性のデータを準備しております
          </div>
        </div>
      </div>
    </div>
  );
}

