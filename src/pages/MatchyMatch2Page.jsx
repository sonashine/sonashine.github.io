import MatchyMatchy from "../components/MatchyMatchy2";

export default function MatchyMatchy2Page() {
  return (
    <section className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Matchy-Matchy 2.0
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Interactive shape-matching arcade game built in <strong>Processing (Java)</strong>,
            recreated in <strong>p5.js</strong> for my portfolio.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="rounded-xl overflow-hidden border border-border shadow-xl bg-card p-6">
            <MatchyMatchy />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            How to Play
          </h2>

          <ul className="space-y-3 text-muted-foreground">
            <li>• Press <strong>F</strong> to cycle through the cannon numbers.</li>
            <li>• Press <strong>J</strong> to fire.</li>
            <li>• Match the cannon's number to the incoming invader.</li>
            <li>• A successful hit destroys the invader.</li>
            <li>• Missing causes the player's base to expand, making the game harder.</li>
            <li>• The game ends when an invader reaches the base.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}