// app/about/page.tsx
import { RewardCircuit } from '../components/RewardCircuit'; // 必要に応じて

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <div className="max-w-3xl mx-auto px-6 py-24 prose prose-invert">
        <h1 className="text-5xl font-serif tracking-tighter mb-16">NRDとは</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">人を「善悪」ではなく、「設計」から理解するための理論です。</h2>
          <p>人は、なぜ同じ出来事に対して異なる行動をとるのでしょうか。<br />
          誰かは挑戦を選び、誰かは安定を求め、誰かは人のために動き、誰かは自分の世界を深めていきます。<br />
          その違いは、性格だけでは説明できません。</p>
          <p>NRD（Neural Reward Design）は、人の行動を生み出す背景には、それぞれ異なる「報酬回路」があるという考え方をもとに設計された理論です。</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">行動を見るのではなく、その理由を見る。</h2>
          <p>NRDは、行動の正しさや間違いを判定するための理論ではありません。<br />
          「なぜ、その人はその選択をしたのか。」その問いに対して、報酬回路という視点から理解を試みます。</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">人を分類するためではなく、理解するために。</h2>
          <p>NRDのタイプ診断は、人に優劣を付けたり、能力を決めたりするものではありません。<br />
          違いを理解することは、自分自身を知り、他者との関係をより豊かにする第一歩になります。</p>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-6">まだ発展の途中にある理論です。</h2>
          <p>NRDは完成した理論ではありません。現在も検証と改善を続けながら、より多くの人の理解につながる理論を目指しています。</p>
        </section>
      </div>
    </div>
  );
}
