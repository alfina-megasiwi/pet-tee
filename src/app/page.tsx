import Home from "../components/Home";
import styles from "./page.module.css";

export const BASE_API_URL = process.env.BASE_API_URL || "";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["title-container"]}>
        <div className={styles["emoji-animal"]}>
          <div style={{ fontSize: "50px" }}>🐶</div>
          <div style={{ fontSize: "20px" }}>🐱</div>
        </div>
        <div className={styles["title-wrapper"]}>
          <div>Pet Tee</div>
          <div className={styles["gradient-text"]}>Generator</div>
        </div>
        <div className={styles["emoji-tee"]} style={{ fontSize: "50px" }}>
          👕
        </div>
      </div>
      <Home url={BASE_API_URL} />
    </div>
  );
};

export default HomePage;
