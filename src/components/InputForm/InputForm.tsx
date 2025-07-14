"use client";

import { useState } from "react";
import styles from "./InputForm.module.css";

type Props = {
  onGenerate: (animal: string, text: string) => void;
  loading: boolean;
};

const InputForm = ({ onGenerate, loading }: Props) => {
  const [animal, setAnimal] = useState("cat");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(animal, text);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form-container"]}>
      <div className={styles["form-wrapper"]}>
        <div>Animal 🐱🐶🦍</div>
        <select
          name="Select animal"
          onChange={(e) => setAnimal(e.target.value)}
          required
        >
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="gorilla">Gorilla</option>
        </select>
      </div>
      <div className={styles["form-wrapper"]}>
        <div>Tee text👕</div>
        <input
          placeholder="Text value here, e.g. indomie..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={10}
          required
        />
      </div>
      <button type="submit" disabled={loading || (!animal && !text)}>
        Generate
      </button>
    </form>
  );
};

export default InputForm;
