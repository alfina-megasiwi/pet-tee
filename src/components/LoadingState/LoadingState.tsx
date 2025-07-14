import React from "react";
import styles from "./LoadingState.module.css";

export type Animal = "cat" | "dog" | "gorilla";

const mapAnimal: Record<Animal, string> = {
  cat: "🐱",
  dog: "🐶",
  gorilla: "🦍",
};

type LoadingStateProps = {
  animal: Animal;
};

const LoadingState = ({ animal }: LoadingStateProps) => {
  return (
    <div className={styles.wrapper}>
      <div>Generating Cute Tee...</div>
      <div className={styles.emoji}>{mapAnimal[animal]}</div>
      <div className={styles["orbiting-emoji"]}>👕</div>
    </div>
  );
};

export default LoadingState;
