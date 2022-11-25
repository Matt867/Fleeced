import styles from '../components-styles/Seller.module.css'

const Seller = ({ seller }) => {
    return (
        <div className={styles.seller}>
            <img src={seller.logo_url}></img>
            <div>
                <b>{seller.fullname}</b>
                <h3>{seller.handle}</h3>
            </div>
        </div>
    )
}


export default Seller