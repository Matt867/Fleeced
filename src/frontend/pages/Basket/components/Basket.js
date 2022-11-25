import styles from "../components-styles/Basket.module.css";
import { useState } from "react"
import ItemCard from "./ItemCard";

const Basket = () => {
    console.log(styles.basket)

    const [items, setItems] = useState([
        {
            id: '1',
            img_url: 'https://media-photos.depop.com/b0/23073875/1230838100_604d557068da426294dcc24ad0e34f9e/P2.jpg',
            name: 'Cap',
            shipping: 10,
            price: 20, 
            seller: {
                fullname: 'Carlos Digan',
                logo_url: 'https://media-photos.depop.com/b0/29711887/1108513973_4c8203529c0b4788a8852eb413136c5e/U2.jpg',
                handle: '@carlos_digan'
            }
        },
        {
            id: '2',
            img_url: 'https://m.media-amazon.com/images/I/71JCqgGdqUL._AC_AA360_.jpg',
            name: 'Ducks',
            shipping: 5,
            price: 20,
            seller: {
                fullname: 'Carlos Digan',
                logo_url: 'https://media-photos.depop.com/b0/29711887/1108513973_4c8203529c0b4788a8852eb413136c5e/U2.jpg',
                handle: '@carlos_digan'
            }
        },
        {
            id: '3',
            img_url: 'https://m.media-amazon.com/images/I/71JCqgGdqUL._AC_AA360_.jpg',
            name: 'Ducks',
            shipping: 0,
            price: 20,
            seller: {
                fullname: 'Carlos Digan',
                logo_url: 'https://media-photos.depop.com/b0/29711887/1108513973_4c8203529c0b4788a8852eb413136c5e/U2.jpg',
                handle: '@carlos_digan'
            }
        },
    ]);

    return (
      <div id={styles.basket}>
        
        {items.map(item => <ItemCard key={item.id} item={item}/>)}
      </div>  
    );
};

export default Basket;
