import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const App = () => {
    return (
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

