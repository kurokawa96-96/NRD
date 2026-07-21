export default function DeclarationPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-5xl font-serif tracking-tighter mb-16">NRD宣言</h1>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <p>私たちは、人を理解するための新しい視点としてNRDを提唱します。</p>
          <p>報酬回路の違いを認め、尊重し、それぞれが輝ける社会を目指します。</p>
          {/* 黒川様の詳細な宣言文を後ほど追加可能です */}
        </div>
      </div>
    </div>
  );
}
