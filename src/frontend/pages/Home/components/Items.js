import styles_Basket from "../../../components-styles/Basket.module.css";
import ItemCard from "./ItemCard";

const Items = ({ items, styles }) => {
    console.log("styles =", styles)
    return (
        
        <>
        
            <div className={styles.item} key={0}>
                <label>Items</label>
            </div>
            <section className={styles.itemsection}>
                {items.map((item, idx) => <ItemCard key={idx} item={item} styles={styles_Basket}/>)}
            </section>
        </>
    );
};

export default Items;
