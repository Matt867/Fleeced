import BasketItem from './BasketItem'


const Order = ({ basketItems }) => {
    return (
        <>
        {basketItems.map(item => <BasketItem item={item}/>)}
        </>
    )
}

export default Order