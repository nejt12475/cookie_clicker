import React, {useEffect, useMemo} from 'react';
import '../Styles/item_to_purchase.css';
interface Props {
    img: string,
    name: string,
    price: number;
    count: number;
    countfunc: Function;
    cookies: number;
    setC: (newCookies: number) => void;
    cps: number;
    spec_cps:number;
    cpsf: (cps: number) => void;
}
const price_format = function (price: number) {
    if (price < 1000) {
        return price.toFixed(2).toString();
    } else if (price >= 1000 && price < 1000000) {
        return (price / 1000).toFixed(2) + "K";
    } else if (price >= 1000000 && price < 1000000000) {
        return (price / 1000000).toFixed(2) + "M";
    } else if (price >= 1000000000 && price < 1000000000000) {
        return (price / 1000000000).toFixed(2) + "B";
    } else if (price >= 1000000000000 && price < 1000000000000000) {
        return (price / 1000000000000).toFixed(2) + "T";
    }}
const buy_item = function ({countfunc, count, price, cookies, setC, cps, spec_cps, cpsf}: Props) {
    if (cookies >= price) {
        countfunc(count + 1);
        setC(cookies - price);
        cpsf(cps+spec_cps);
    }
}
const ItemToPurchase = function ({img, name, price, count, countfunc, cookies, setC,cps,cpsf,spec_cps}: Props) {
    const newPrice = price + ((price *0.2)**(count/6));

    return (
        <div className={"item_to_purchase"}>
            <img src={`/Assets/${img}`} alt={name}/>{name}: {count}
            <button onClick={() => buy_item({
                img,
                name,
                countfunc,
                count,
                price: newPrice,
                cookies,
                setC,
                cps,
                cpsf,
                spec_cps
            })}>
                Buy: <br/>{price_format(newPrice)}</button>
        </div>
    )
};
export default ItemToPurchase;
