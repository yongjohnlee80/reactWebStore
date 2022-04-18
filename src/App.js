import { Routes, Route } from "react-router-dom";

import categories from "./categories.json";

import Navigation from "./Navigation/navigation.compoenent";
import Home from "./routes/home/home.component";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home categories={categories} />} />
            </Route>
        </Routes>
    );
};

export default App;
