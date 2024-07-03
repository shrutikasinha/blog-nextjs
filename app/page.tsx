import styles from "./page.module.css";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main>
      <h1 className={styles.mainpagemargin}>Welcome to my blog</h1>
      <Posts />
    </main>
  );
}
