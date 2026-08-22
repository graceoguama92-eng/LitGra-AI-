import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <Link href="/" className="brand"><span className="logo">L</span> LitGra <span className="ai">AI</span></Link>
        <Link href="/studio" className="button small">Open Studio</Link>
      </nav>
      <section className="hero">
        <span className="eyebrow">AI CREATIVE STUDIO</span>
        <h1>Create without limits.</h1>
        <p>Turn your ideas into images with LitGra AI. More creative tools will be added to the Studio.</p>
        <Link href="/studio" className="button">Start Creating</Link>
      </section>
    </main>
  );
}