import { createContext, useState, useEffect } from "react";

// import { addCollectionAndDocuments } from "../Utils/firebase/firebase.utils.js";
// import SHOP_DATA from "../shop-data.js";

import { getCategoriesAndDocument } from "../Utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    /** Run only once (adding item database */
    // useEffect(()=> {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocument();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
