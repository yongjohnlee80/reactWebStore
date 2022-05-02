import { Routes, Route } from "react-router-dom";

import categories from "./categories.json";

import Navigation from "./components/Navigation/navigation.compoenent";
import Authentication from "./components/authentication/authentication.component";
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
                <Route path="auth" element={<Authentication/>} />
            </Route>
        </Routes>
    );
};

export default App;
