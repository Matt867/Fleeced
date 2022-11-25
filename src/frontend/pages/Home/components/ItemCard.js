import styles_homeItem from "../components-styles/Home-Item.module.css";

const ItemCard = ({ key, item, styles }) => {
    return (
        <div key={key} className={styles_homeItem.wrapper}>
            <div className={styles_homeItem.overlay}>
                {/* <img src={item.image}></img> */}
                <p>Title: {item.title}</p>
                <br />
                <p>Price: {item.price}</p>
            </div>
            
        </div>
    );
};

export default ItemCard
