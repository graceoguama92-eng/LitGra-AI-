"use client";

import { useState } from "react";
import Link from "next/link";

export default function Studio() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generateImage() {
    if (!prompt.trim()) return setError("Enter a description first.");
    setLoading(true); setError(""); setImage("");
    try {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Generation failed.");
      setImage(data.image);
    } catch (e) {
      setError(e.message || "Something went wrong.");
    } finally { setLoading(false); }
  }

  return (
    <main className="studioPage">
      <nav className="nav">
        <Link href="/" className="brand"><span className="logo">L</span> LitGra <span className="ai">AI</span></Link>
        <Link href="/" className="button small ghost">← Home</Link>
      </nav>
      <section className="studio">
        <span className="eyebrow">LITGRA STUDIO</span>
        <h1>Create an image</h1>
        <p className="muted">Describe what you want LitGra AI to create.</p>
        <div className="workspace">
          <div className="panel">
            <label>IMAGE PROMPT</label>
            <textarea rows="8" value={prompt} onChange={e => setPrompt(e.target.value)}
              placeholder="A cinematic African sunset over a beautiful modern city, highly detailed..." />
            <button className="button full" onClick={generateImage} disabled={loading}>
              {loading ? "Creating..." : "Generate Image"}
            </button>
            {error && <p className="error">{error}</p>}
          </div>
          <div className="preview">
            {loading ? <h2>Creating your image...</h2> :
             image ? <img src={image} alt={prompt} /> :
             <><div className="previewIcon">✦</div><h2>Your image will appear here</h2></>}
          </div>
        </div>
      </section>
    </main>
  );
}