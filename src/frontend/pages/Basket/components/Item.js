import styles from '../components-styles/Item.module.css'

const Item = ({ item }) => {
    return (
        <div className={styles.item}>
            <img src={item.img_url}></img>
            <div className={styles.itemDescription}>
                <p>{item.name}</p>
                <b>£{item.price}</b>
                {item.size && <p>{item.size}</p>}
                <button>Remove Item</button>
            </div>
        </div>
    );
};


export default Item
