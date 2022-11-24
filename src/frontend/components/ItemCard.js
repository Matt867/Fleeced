import styles from '../components-styles/Basket.module.css'

const ItemCard = ({itemCard}) => {

    return (
        <div className={styles.wrapper}>
            <img src={itemCard.image}></img>
            <p>Title: {itemCard.title}</p>
            <p>Price: {itemCard.price}</p>
        </div>
    )
}

export default ItemCard