import styles from '../components-styles/Basket.module.css'
import { useState } from "react"
import Order from "./Order"

const Basket = () => {
    const [items, setItems] = useState([
        { 
        img_url: 'https://m.media-amazon.com/images/I/71JCqgGdqUL._AC_AA360_.jpg', 
        title: 'Ducks', 
        quantity: 2, 
        price: 20
    }
    ])

    

    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>
                <div>Product</div>
                <div>Price</div>
                <div>Qty</div>
                <div>Total</div>
                <Order basketItems={items}/>
            </div> 
            <div id={styles.cost}>
                <h2 id={styles.subtotal}>Subtotal: £{5}</h2>
                <button id={styles.pay}>Checkout</button>
            </div>
          
        </div>
    )
}

export default Basket