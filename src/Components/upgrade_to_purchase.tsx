import React from 'react';
import '../Styles/upgrade_to_purchase.css';
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
    click_strength: number;
    clickf: (click_strength: number) => void;
    auto_click: number;
}
const price_format = function (price: number) {
    if (price < 1000) {
        return price.toFixed(2).toString();
    } else if (price >= 1000 && price <= 999999) {
        return (price / 1000).toFixed(2) + "K";
    } else if (price >= 1000000 && price <= 999999999) {
        return (price / 1000000).toFixed(2) + "M";
    } else if (price >= 1000000000 && price <= 999999999999) {
        return (price / 1000000000).toFixed(2) + "B";
    } else if (price >= 1000000000000 && price <= 999999999999999) {
        return (price / 1000000000000).toFixed(2) + "T";
    }}
const buy_item = function ({countfunc, count, price, cookies, setC, cps, spec_cps, cpsf, name, click_strength, clickf}: Props) {
    if (cookies >= price) {
        countfunc(count + 1);
        setC(cookies - price);
        cpsf(cps+spec_cps);

        if (name === "Pointer"){
            clickf(click_strength+1);
        }
    }
}
const UpgradeToPurchase = function ({img, name, price, count, countfunc, cookies, setC,cps,cpsf,spec_cps, click_strength, clickf, auto_click}: Props) {
    //price = price + ((price *0.3)**2)*(count/10);
    price = price + (price * 0.3) * (count * 0.3) * count

    return (
        <div className={"item_to_purchase"}>
            <img src={`/Assets/${img}`} alt={name}/><span>{name}: {count}<br></br>
            {
                name === "Pointer" ? <span>Pointer strength: {click_strength} </span>: <span>{"Sum: "}{auto_click*count} <br></br>{"CPS: "}{auto_click}</span>
            }</span>

            <button onClick={() => buy_item({
                img,
                name,
                countfunc,
                count,
                price,
                cookies,
                setC,
                cps,
                cpsf,
                spec_cps,
                click_strength,
                clickf,
                auto_click
            })}>
                Buy: <br/>{price_format(price)}</button>
        </div>
    )
};
export default UpgradeToPurchase;
