import styles from '../components-styles/BasketItem.module.css'

const BasketItem = ({ item }) => {
    return (
        <>
        <div className={styles.wrapper}>
            <img src={item.img_url}></img>
            <h3>{item.title}</h3>
        </div>
        <h3>{item.price}</h3>
        <h3>{item.quantity}</h3>
        <h3>{item.price * item.quantity}</h3>
        </>
    )
} 


export default BasketItem