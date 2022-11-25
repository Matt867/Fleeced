import { useState } from "react";
import styles from "../components-styles/SearchBar.module.css";

const SeachBar = () => {
  const [searchText, setSeachText] = useState("");
  return (
    <>
      <input
        type="text"
        className={styles.search}
        onChange={e => setSeachText(e.target.value)} 
        placeholder="Search"
        />
    </>
  );
};

export default SeachBar;
