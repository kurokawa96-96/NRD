export default function DeclarationPage() {
  return (
    <div className="min-h-screen bg-canvas py-24">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="font-body text-[11px] font-semibold text-ink-tertiary tracking-[0.24em] mb-16">
          DECLARATION
        </div>

        <div className="font-display text-2xl text-ink-primary leading-[2.4] tracking-wide">
          <p>私たちは、人を測らない。</p>
          <p className="mt-10">優劣ではなく、違いを見る。</p>
          <p className="mt-10">
            何に心が動くのかを知ることは、
            <br />
            自分を否定しないための、はじまりになる。
          </p>
          <p className="mt-10">
            NRDは、比べるための理論ではなく、
            <br />
            理解し合うための共通言語でありたい。
          </p>
        </div>

        <div className="w-8 h-px bg-line mx-auto my-16" />

        <p className="font-body text-[12px] text-ink-tertiary tracking-[0.1em]">
          NRD Project
        </p>
      </div>
    </div>
  );
}
