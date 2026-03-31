import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cookie_counter from "./Components/Cookie_counter";
import data from "../../cookie_clicker/src/Shop/Data.json";
import ItemToPurchase from "./Components/item_to_purchase";
interface Props {
    img: string;
    name: string;
    price: number;
}
const shop_items: Props[] = data as Props[];
const App = () => {
    const handleCookieClick = () => {
        setCookies(cookies+1);
    }
    const [cookies, setCookies] = useState(0);

    return (
        <React.StrictMode>
        <nav className={"navigation"}><span><h2>Leaderboard</h2><h2>Shop</h2><h2>Home</h2><h2>Home</h2></span><Cookie_counter cookies={cookies}/></nav>
            <div className="container">
                <div className={"cookie-area"}>
                    <img src="/Assets/great-plains-windmill-todd-klassy.jpg" className={"back"} alt="" draggable={false}/>
                   <img src="/Assets/ChocolateChip_1000.png" className={"cookie"} alt="cookie" draggable={false} onClick={handleCookieClick}/>
                </div>

                <div className={"shop-area"}>
                    <h2>Item Shop</h2>
                    <div className="items_to_purchase">
                    {shop_items.slice(0, 5).map((item) => (
                        <ItemToPurchase
                            key={item.name}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                        />
                    ))}</div>
                    
                </div>
            </div>

        </React.StrictMode>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
