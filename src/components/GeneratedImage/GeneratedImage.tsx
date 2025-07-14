import Image from "next/image";

type Props = {
  imageUrl: string;
};

const GeneratedImage = ({ imageUrl }: Props) => {
  if (!imageUrl) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2rem",
      }}
    >
      <Image
        width={300}
        height={300}
        alt="generated-image"
        src={imageUrl}
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
};

export default GeneratedImage;
