import { Routes, Route } from "react-router-dom";

import categories from "./categories.json";

import Navigation from "./Navigation/navigation.compoenent";
import SignIn from "./sign-in/sign-in.component";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>Shop Page</h1>
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home categories={categories} />} />
                <Route path="shop" element={<Shop/>} />
                <Route path="sign-In" element={<SignIn/>} />
            </Route>
        </Routes>
    );
};

export default App;
