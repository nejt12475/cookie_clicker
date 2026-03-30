import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cookie_counter from "./Components/Cookie_counter";
const App = () => {
    const handleCookieClick = (event: React.MouseEvent<HTMLImageElement>) => {
setCookies(cookies+1);
    }
    const [cookies, setCookies] = useState(0);
    return (
        <React.StrictMode>
        <nav className={"navigation"}><Cookie_counter cookies={cookies}/></nav>
            <div className="container">
                <div className={"cookie-area"}>
                    <img src="../Assets/great-plains-windmill-todd-klassy.jpg" className={"back"} draggable={false}/>
                   <img src="../Assets/ChocolateChip_1000.png" className={"cookie"} draggable={false} onClick={handleCookieClick}/>
                </div>

                <div className={"shop-area"}>

                </div>
            </div>












        </React.StrictMode>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

