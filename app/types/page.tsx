import Link from "next/link";
import data from "../data/types.json";

export default function TypesPage() {
  return (
    <div className="min-h-screen bg-canvas py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="font-body text-[11px] font-semibold text-ink-tertiary tracking-[0.24em] mb-4">
            SEVEN TYPES
          </div>
          <h1 className="font-display text-4xl font-semibold text-ink-primary tracking-wide leading-relaxed">
            7つの報酬タイプ
          </h1>
          <div className="w-8 h-px bg-line mx-auto my-6" />
          <p className="font-body text-sm text-ink-secondary leading-8 max-w-md mx-auto">
            あなたが何に心を動かされるのか。7つの原型から紐解きます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((type: { id: string; name: string; description: string; color: string }) => (
            <Link
              key={type.id}
              href={`/types/${type.id}`}
              className="group bg-surface border border-line rounded p-8 transition-colors hover:border-emerald/40"
            >
              <div
                className="w-3 h-3 rounded-full mb-6"
                style={{ backgroundColor: type.color }}
              />

              <h3 className="font-display text-lg font-semibold text-ink-primary mb-3">
                {type.name}
              </h3>
              <p className="font-body text-[13px] text-ink-secondary leading-7 mb-6">
                {type.description}
              </p>

              <div className="font-body text-[12px] font-semibold text-navy flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                詳細を見る
                <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
