import React from 'react';
import '../Styles/item_to_purchase.css';
interface Props {
    img: string,
    name: string,
    price: number;
}
const ItemToPurchase =  function ({img, name, price}:Props) {

    return (
    <div className={"item_to_purchase"}><img src={`/Assets/${img}`} alt={name}/>{name}
        <button>Buy: <br/>{price}</button></div>
        )
};
export default ItemToPurchase;
