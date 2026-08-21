import Link from "next/link";

const tools = [
  {
    title: "AI Image",
    text: "Create stunning images from your ideas.",
    icon: "✦"
  },
  {
    title: "Text to Image",
    text: "Describe your imagination and turn words into visuals.",
    icon: "◈"
  },
  {
    title: "Image to Video",
    text: "Bring your images to life with AI.",
    icon: "▶"
  },
  {
    title: "AI Writer",
    text: "Create stories, scripts, captions and more.",
    icon: "Aa"
  }
];

export default function Home() {
  return (
    <main className="page">

      <nav className="nav">

        <Link href="/" className="brand">
          <span className="logo">L</span>
          LitGra <span className="ai">AI</span>
        </Link>

        <div className="navlinks">
          <a href="#tools">Tools</a>
          <a href="#about">About</a>
          <Link href="/studio">Studio</Link>
        </div>

        <Link href="/studio" className="button small">
          Open Studio
        </Link>

      </nav>


      <section className="hero">

        <div className="badge">
          AI CREATIVE STUDIO
        </div>

        <h1>
          Create without limits.
        </h1>

        <p className="heroText">
          LitGra AI is your creative workspace for generating
          images, stories, ideas and videos from simple prompts.
        </p>

        <div className="actions">

          <Link href="/studio" className="button">
            Start Creating
          </Link>

          <a href="#tools" className="button ghost">
            Explore Tools
          </a>

        </div>

      </section>


      <section id="tools" className="section">

        <div className="sectionHead">

          <div>

            <span className="eyebrow">
              CREATIVE TOOLS
            </span>

            <h2>
              Everything starts with an idea.
            </h2>

          </div>

          <p>
            Choose a workflow and turn your concept into content.
          </p>

        </div>


        <div className="grid">

          {tools.map((tool) => (

            <Link
              href="/studio"
              className="card"
              key={tool.title}
            >

              <div className="icon">
                {tool.icon}
              </div>

              <h3>
                {tool.title}
              </h3>

              <p>
                {tool.text}
              </p>

              <span className="arrow">
                Open →
              </span>

            </Link>

          ))}

        </div>

      </section>


      <section id="about" className="about">

        <span className="eyebrow">
          LITGRA AI
        </span>

        <h2>
          One workspace for your creative workflow.
        </h2>

        <p>
          LitGra AI brings creative AI tools into one
          simple workspace. Generate images, create stories,
          develop videos and turn ideas into finished content.
        </p>

      </section>


      <footer>
        © 2026 LitGra AI. Built for creators.
      </footer>

    </main>
  );
}