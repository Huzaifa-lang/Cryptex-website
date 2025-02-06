import React, { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const CoinContext = createContext();


const CoinProvider = (pops) => {




    const apiKey = import.meta.env.VITE_API_KEY
    const url = import.meta.env.VITE_API_WEBSITE


    const [coins, setCoins] = useState(null)


    



    useEffect(() => {

        fetch(url, {
            method: "GET",
            headers: {
                
                'Accept': 'application/json',
                'x-cg-api-key': apiKey
            }})

        .then(req => req.json())
        .then(data => {
            console.log(data)
            setCoins(data.slice(0, 10))
        })
        .catch(err => console.log("There was an error"))
        

    },[])


        

    // useEffect(()=> {
    //     console.log(coins)
    // },[coins])




    

    

    
    return (
        <CoinContext.Provider value={coins}>
            {pops.children}
        </CoinContext.Provider>
    )

}

export default CoinProvider