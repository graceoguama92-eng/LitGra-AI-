import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const body = await request.json();

    const prompt = body?.prompt?.trim();

    if (!prompt) {
      return Response.json(
        { error: "Please provide an image prompt." },
        { status: 400 }
      );
    }

    const result = await openai.images.generate({
      model: "gpt-image-2",
      prompt: prompt,
      size: "1024x1024",
    });

    const imageBase64 = result?.data?.[0]?.b64_json;

    if (!imageBase64) {
      return Response.json(
        { error: "The image service did not return an image." },
        { status: 502 }
      );
    }

    return Response.json({
      image: `data:image/png;base64,${imageBase64}`,
    });

  } catch (error) {
    console.error("LitGra image generation error:", error);

    return Response.json(
      {
        error:
          "LitGra could not generate the image right now. Please try again.",
      },
      { status: 500 }
    );
  }
}