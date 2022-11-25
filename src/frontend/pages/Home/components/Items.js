import styles_Basket from "../../../components-styles/Basket.module.css";
import ItemCard from "./ItemCard";

const Items = ({ items, styles }) => {
    return (
        <>
            <div className={styles.item} key={0}>
                <label>Items</label>
            </div>
            <section className={styles.itemsection}>
                {items.map((item, idx) => <ItemCard key={idx} item={item} />)}
            </section>
        </>
    );
};

export default Items;
