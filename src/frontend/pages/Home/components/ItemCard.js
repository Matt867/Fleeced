const ItemCard = ({ item, styles }) => {
    return (
        <div className={styles.wrapper}>
            <img src={item.image}></img>
            <p>Title: {item.title}</p>
            <p>Price: {item.price}</p>
        </div>
    );
};

export default ItemCard
