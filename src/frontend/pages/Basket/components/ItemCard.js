import Item from "./Item"
import PaymentInfo from "./PaymentInfo"
import Seller from "./Seller"
import styles from '../components-styles/ItemCard.module.css'

const ItemCard = ({ item }) => {
    return (
        <div className={styles.itemCard}>
            <div className={styles.wrapper}>
                <Seller seller={item.seller} />
                <Item item={item} />
            </div>
            <PaymentInfo item={item} />
        </div>
    )
}

export default ItemCard
