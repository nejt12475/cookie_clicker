import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cookie_counter from "./Components/Cookie_counter";
import data from "../../cookie_clicker/src/Shop/Data.json";
import ItemToPurchase from "./Components/item_to_purchase";

type CountFuncName = "setpointercount" | "setovencount";

interface Props {
    id: number;
    img: string;
    name: string;
    price: number;
    count: number;
    countfunc: CountFuncName;
    auto_click: number;
}
const shop_items: Props[] = data as unknown as Props[];
const App = () => {
    const [cookies, setCookies] = useState(0);
    const handleCookieClick = () => {setCookies(cookies+1);}
    // const [pointer_count, setpointercount] = useState(0);
    // const [oven_count, setovencount] = useState(0);
    const [upgrade_count, setCount] = useState<Map<number, number>>(new Map());
    const [click_per_secound, setClickPerSecond] = useState(0);
    const [page, setPage] = useState(1);

    const cps = useRef<number>(0);

    const count = (id: number, newCount: number) => {
        setCount(prev => {
            const newMap = new Map(prev);

            const current = newMap.get(id) ?? 0;

            const newCount = current + 1;
            newMap.set(id, newCount);

            return newMap;
        })
    }


    useEffect(() => {
        oneTimeSecond();
    }, [])

    useEffect(() => {
        cps.current = click_per_secound;
    }, [ click_per_secound ]);

    const oneTimeSecond = () => {
        let f:number = 10;
        setTimeout(() => {
            setCookies(prev => prev + cps.current/f);
            oneTimeSecond();
        }, 1000/f);
    }

    const maxPage = Math.ceil(shop_items.length / 5);

    console.log(shop_items)

    return (
        <React.StrictMode>
        <nav className={"navigation"}><span><h2>Leaderboard</h2><h2>Shop</h2><h2>Home</h2><h2>Home</h2></span><Cookie_counter cookies={cookies} cps={click_per_secound}/></nav>
            <div className="container">
                <div className={"cookie-area"}>
                    <img src="/Assets/great-plains-windmill-todd-klassy.jpg" className={"back"} alt="" draggable={false}/>
                   <img src="/Assets/ChocolateChip_1000.png" className={"cookie"} alt="cookie" draggable={false} onClick={handleCookieClick}/>
                </div>

                <div className={"shop-area"}>
                    <h2>Item Shop{page}</h2>
                    <div className="items_to_purchase">
                    {shop_items.slice((page-1)*5, page*5).map((item, index) => (
                        <ItemToPurchase
                            key={index}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            count={upgrade_count.get(item.id) ?? 0}
                            countfunc={(newCount: number) => {
                                count(item.id, newCount);
                            }}
                            cookies={cookies}
                            setC={setCookies}
                            cps={click_per_secound}
                            cpsf={(cps: number) => setClickPerSecond(cps)}
                            spec_cps={item.auto_click}
                        />
                    ))}</div>
                    <button className={"arrow"} onClick={() => setPage(prev => prev > 1 ? prev - 1 : prev)}> {'<---'} </button>
                    <button className={"arrow"} onClick={() => setPage(prev => prev < maxPage ? prev + 1 : prev)}> {'--->'} </button>

                </div>
            </div>

        </React.StrictMode>
        /// Todo: Fix buttons for changing page at the shop are to not be so high
    );
};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
