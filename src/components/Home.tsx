"use client";

import { useState } from "react";
import { fetchData } from "@/utils/fetch";
import {
  API_URL,
  ASPECT_RATIO,
  MODEL,
  OUTPOT_FORMAT,
  OUTPUT_QUALITY,
  PROMPT,
} from "../constant/constant";
import InputForm from "./InputForm/InputForm";
import GeneratedImage from "./GeneratedImage/GeneratedImage";
import LoadingState, { Animal } from "./LoadingState/LoadingState";
import Toast from "./Toast/Toast";

type Props = {
  url: string;
};

const Home = ({ url }: Props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [animal, setAnimal] = useState("cat");
  const [showToast, setShowToast] = useState(false);

  const handleToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleGenerate = async (animal: string, text: string) => {
    try {
      setLoading(true);
      setAnimal(animal);

      const data = await fetchData({
        url: `${url}${API_URL.GENERATE_IMAGE}`,
        method: "POST",
        body: {
          model: MODEL,
          input: {
            prompt: PROMPT({ animal, text }),
            aspect_ratio: ASPECT_RATIO,
            output_format: OUTPOT_FORMAT,
            output_quality: OUTPUT_QUALITY,
          },
        },
      });

      setImageUrl(data.image);
    } catch (error) {
      console.error("Failed to generate image:", error);
      handleToast();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <InputForm onGenerate={handleGenerate} loading={loading} />
      {loading && <LoadingState animal={animal as Animal} />}
      {!loading && imageUrl && <GeneratedImage imageUrl={imageUrl} />}
      <Toast message="Failed to generate image" visible={showToast} />
    </div>
  );
};

export default Home;
