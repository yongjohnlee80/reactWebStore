import { Routes, Route } from "react-router-dom";

import categories from "./categories.json";

import Navigation from "./components/Navigation/navigation.compoenent";
import Authentication from "./components/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home categories={categories} />} />
                <Route path="shop/*" element={<Shop/>} />
                <Route path="auth" element={<Authentication/>} />
                <Route path="checkout" element={<Checkout/>} />
            </Route>
        </Routes>
    );
};

export default App;
