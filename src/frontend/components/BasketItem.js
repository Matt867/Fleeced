import styles from '../components-styles/BasketItem.module.css'

const BasketItem = ({ item }) => {
    return (
        <>
        <div className={styles.wrapper}>
            <img src={item.img_url}></img>
            <h3>{item.title}</h3>
        </div>
        <h3>{item.price}</h3>
        <div className={styles.quantity}>
            <button>-</button>
            <h3>{item.quantity}</h3>
            <button>+</button>
        </div>
        <h3>{item.price * item.quantity}</h3>
        </>
    )
} 


export default BasketItem