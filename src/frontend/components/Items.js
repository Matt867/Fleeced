import styles from '../components-styles/Basket.module.css'

const Items = ({items}) => {
    return (
        <div className={styles.wrapper}>
            <header>Items</header>
            {items.map(item => <ItemCard itemCard={item}/>)}
        </div>
    )
}

export default Items