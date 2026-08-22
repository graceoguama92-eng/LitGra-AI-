import OpenAI from "openai";

export const runtime = "nodejs";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || !prompt.trim()) {
      return Response.json({ error: "A prompt is required." }, { status: 400 });
    }

    const result = await client.images.generate({
      model: "gpt-image-2",
      prompt: prompt.trim(),
      size: "1024x1024",
    });

    const b64 = result?.data?.[0]?.b64_json;
    if (!b64) {
      return Response.json({ error: "No image was returned." }, { status: 502 });
    }

    return Response.json({ image: `data:image/png;base64,${b64}` });
  } catch (error) {
    console.error("LitGra image generation error:", error);
    return Response.json(
      { error: "Image generation failed. Check your OpenAI API key, billing, and server logs." },
      { status: 500 }
    );
  }
}