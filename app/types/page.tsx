import { notFound } from "next/navigation";
import Link from "next/link";
import data from "../../data/types.json";

interface TypeRecord {
  id: string;
  name: string;
  description: string;
  color: string;
}

export function generateStaticParams() {
  return (data as TypeRecord[]).map((type) => ({ id: type.id }));
}

export default function TypeDetailPage({ params }: { params: { id: string } }) {
  const type = (data as TypeRecord[]).find((t) => t.id === params.id);

  if (!type) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-canvas py-24">
      <div className="max-w-xl mx-auto px-6">
        <Link
          href="/types"
          className="font-body text-[12px] font-semibold text-ink-secondary hover:text-navy transition-colors"
        >
          ← 7つの報酬タイプ一覧へ
        </Link>

        <div className="mt-10 mb-12">
          <div
            className="w-3 h-3 rounded-full mb-6"
            style={{ backgroundColor: type.color }}
          />
          <h1 className="font-display text-3xl font-semibold text-ink-primary tracking-wide">
            {type.name}
          </h1>
        </div>

        <p className="font-body text-[14.5px] text-ink-secondary leading-9">
          {type.description}
        </p>

        {/* TODO: 診断ロジック(lib/scoring.ts)完成後、この特性に紐づく
            詳細な傾向・強み・注意点などを data 側に追加して拡張する */}
      </div>
    </div>
  );
}    </div>
  );
}
