import styles from "../../../components-styles/Basket.module.css"
import ItemCard from "./ItemCard";

const Items = ({ items }) => {
    return (
        <>
            <div className={styles.wrapper} key={0}>
                <label>Items</label>
            </div>
            {items.map((item, idx) => <ItemCard key={idx} item={item} styles={styles} />)}
        </>
    );
};

export default Items;
