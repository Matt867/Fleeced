const ItemCard = ({ key, item, styles }) => {
    return (
        <div key={key} className={styles.wrapper}>
            {/* <img src={item.image}></img> */}
            <p>Title: {item.title}</p>
            <br />
            <p>Price: {item.price}</p>
        </div>
    );
};

export default ItemCard
