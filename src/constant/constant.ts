export const API_URL = {
  GENERATE_IMAGE: `/api/generate-image`,
};

export const PROMPT = ({ animal, text }: { animal: string; text: string }) =>
  `A high-quality studio photograph showing only the upper half of a cute ${animal}, focusing on its chest and face. The ${animal} is wearing a clean, plain white t-shirt with the text "${text}" printed clearly and correctly across the front in Arial font. The text must be fully readable and perfectly spelled. The image is shot in a professional photo studio with soft, diffused lighting and a smooth, neutral gray background. The animal has a friendly, photogenic expression, with natural posture.`;
export const ASPECT_RATIO = "1:1";
export const OUTPOT_FORMAT = "jpg";
export const OUTPUT_QUALITY = 100;
export const MODEL = "black-forest-labs/flux-pro";
