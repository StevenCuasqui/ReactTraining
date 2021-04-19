import axios, { AxiosResponse } from "axios";

export default class AuthSpotify{
    private static instance:AuthSpotify;
    private static token:string;

    public static async getAuthInstance():Promise<AuthSpotify>{
        if(!AuthSpotify.instance){
            await this.initialize();
        }
        return this.instance;
    }

    private static async initialize():Promise<void>{
        const tokenResponse:string = await this.fetchToken();
        AuthSpotify.token = tokenResponse;
        AuthSpotify.instance = new AuthSpotify();
    }

    private static async fetchToken():Promise<string>{
        const tokenResponse:AxiosResponse = await axios('https://accounts.spotify.com/api/token', {
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : 'Basic ' + btoa(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET)
                },
                data : 'grant_type=client_credentials',
                method : 'POST'   
        });
        return tokenResponse.data.access_token
    }

    get tokenString():string{
        return AuthSpotify.token;
    }
}