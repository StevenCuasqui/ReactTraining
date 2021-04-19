import React, { createContext, useState, useContext, useEffect } from "react";
import AuthSpotify from '../services/api-auth/spotify-auth.service';

export const TokenContext = createContext<string>('');

//Exponer contexto => Componentes obtienen token solo a traves de useToken()
export const useToken = ():string => useContext(TokenContext);

//Context Provider
export const TokenProvider:React.FC = ({children}) => {
    const [token,setToken] = useState<string>('');
    
    const getSpotifyToken = async()=>{
        const authService = AuthSpotify.getAuthInstance();
        const tokenSpotify:string = (await authService).tokenString
        setToken(tokenSpotify)
    }

    useEffect(()=>{
        getSpotifyToken()
    },[])
    
    return (
        <TokenContext.Provider value={token}>
            {children}
        </TokenContext.Provider>
    )
};





