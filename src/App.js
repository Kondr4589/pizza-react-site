import {Routes, Route,} from "react-router-dom";

import './scss/app.scss'

import Header from "./components/Header";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import Cart from "./components/Pages/Cart";
import {useState} from "react";


function App() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <Header
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home searchValue={searchValue}/>} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
