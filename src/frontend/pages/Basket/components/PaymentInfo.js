import styles from '../components-styles/PaymentInfo.module.css'

const PaymentInfo = ({ item }) => {
    return (
        <div className={styles.paymentInfo}>
            <div className={styles.wrapper}>
                <p>Item(s)</p>
                <p>£{item.price}</p>
            </div>
            <div className={styles.wrapper}>
                <p>Estimated shipping</p>
                <p>£{item.shipping}</p>
            </div>
            <div className={styles.wrapper}>
                <b>Total</b>
                <b>£{item.price + item.shipping}</b>
            </div>
            <button className={styles.checkout}>Checkout</button>
        </div>
    )
}


export default PaymentInfo