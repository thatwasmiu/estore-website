import { createContext, useContext, useState } from "react";
import { UserLoginContext } from "./UserLoginContext";

const AppDataContext = createContext({});

export function useAppDataContext() {
    return useContext(AppDataContext);
}
export function AppDataContextProvider({children}) {
    const [products, setProductList] = useState([]);
    const [categories, setCategoryList] = useState([]);

    const setProductContext = (d) => {
        setProductList(d);
        
    }
    
    const setCategoryContext = (d) => {
        
        setCategoryList(d);

    }

    

    return (
        <AppDataContext.Provider 
            value={{ categories, products, setCategoryContext, setProductContext}}>
            {children}        
        </AppDataContext.Provider>
    )
}