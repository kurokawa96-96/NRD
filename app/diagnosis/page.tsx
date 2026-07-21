'use client';

import Link from 'next/link';

export default function DiagnosisPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center py-20">
      <div className="max-w-xl text-center px-6">
        <h1 className="text-6xl font-serif tracking-tighter mb-8">NRD診断</h1>
        <p className="text-xl text-white/70 mb-12">あなたが何に報酬を感じるのかを、約5分で明らかにします。</p>
        
        <Link 
          href="/diagnosis/questions"
          className="inline-block px-12 py-6 bg-white text-black rounded-2xl text-xl font-medium hover:bg-white/90 transition-all"
        >
          診断を始める
        </Link>
        
        <p className="mt-8 text-sm text-white/50">匿名・無料・個人情報は保存されません</p>
      </div>
    </div>
  );
}
