import styles from "../components-styles/Banner.module.css";

const Banner = () => {
  return (
    <>
      <section className={styles.banner}>
        <h1 className={styles.bannername}>BLACK FRIDAY</h1>
        <h3>50% OFF</h3>
      </section>
    </>
  );
};

export default Banner;
