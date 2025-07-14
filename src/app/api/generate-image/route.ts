import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(req: NextRequest) {
  const { model, input } = await req.json();

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN || "",
  });

  try {
    const output = (await replicate.run(model, { input })) as {
      url: () => Promise<URL>;
    };
    const url = await output.url();
    const imageUrl = url.href;

    return NextResponse.json({
      image: imageUrl,
    });
  } catch (error) {
    console.error("Replicate Error:", error);
    return NextResponse.json(
      { error: "Failed to generate image" },
      { status: 500 }
    );
  }
}
