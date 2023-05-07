import { createContext, useContext, useEffect, useState } from "react";
import { UserLoginContext } from "./UserLoginContext";

const AppDataContext = createContext({});

export function useAppDataContext() {
    return useContext(AppDataContext);
}

export function AppDataContextProvider({children}) {
    const { authUser } = useContext(UserLoginContext);
    const [products, setProductList] = useState([]);
    const [categories, setCategoryList] = useState([]);
    const [vouchers, setVoucherList] = useState([]);
    const setProductContext = (d) => {
        setProductList(d);
        
    }


    const setCategoryContext = (d) => {
        
        setCategoryList(d);

    }

    const setVoucherContext = (d) => {
        setVoucherList(d);
    }

    return (
        <AppDataContext.Provider 
            value={{ categories, products, setCategoryContext, setProductContext, vouchers, setVoucherContext}}>
            {children}        
        </AppDataContext.Provider>
    )
}