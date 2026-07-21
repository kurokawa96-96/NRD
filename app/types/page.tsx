import Link from 'next/link';
import data from '../../data/types.json';

export default function TypesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif tracking-tighter mb-6">7つの報酬タイプ</h1>
          <p className="text-xl text-white/70">あなたの本質的な動機を紐解く、Neural Rewardの7つの原型</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((type: any) => (
            <Link 
              key={type.id} 
              href={`/types/${type.id}`}
              className="group bg-zinc-900 border border-white/10 rounded-3xl p-10 hover:border-violet-500/30 transition-all hover:-translate-y-1"
            >
              <div 
                className="w-20 h-20 rounded-2xl mb-8 flex items-center justify-center text-5xl"
                style={{ backgroundColor: `${type.color}20`, color: type.color }}
              >
                {type.name.slice(0, 1)}
              </div>
              
              <h3 className="text-3xl font-medium mb-4">{type.name}</h3>
              <p className="text-white/70 mb-6">{type.description}</p>
              
              <div className="text-sm text-violet-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                詳細を見る →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
