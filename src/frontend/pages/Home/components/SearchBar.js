import styles from "../components-styles/SearchBar.module.css";

const SeachBar = ({ setItems, setSearchText, searchText }) => {
  return (
    <>
      <input
        type="text"
        className={styles.search}
        onChange={e => setSearchText(e.target.value)}
        onSubmit={e => {
          // Update Items using fetch req
          /**
           * return fetch("local...")
           *  .then(req => [item1, ...])
           *  .then(items => <Navigate to="/" />)
           *  .catch(error => console.log(error));
           */

          // or... after which we "Navigate to='/'"
        }}
        value={searchText}
        placeholder="Search" />
    </>
  );
};

export default SeachBar;
