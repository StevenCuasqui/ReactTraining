import AuthSpotify from "../src/services/api-auth/spotify-auth.service";

describe('spotify-auth.service',function(){

    const getSpotifyToken = async():Promise<string>=>{
        const authService = AuthSpotify.getAuthInstance();
        const tokenSpotify:string = (await authService).tokenString
        console.log(tokenSpotify)
        return tokenSpotify
    }

    describe('getTokenString',function(){
        it('should return a token(string)',async()=>{
            getSpotifyToken().then((token)=>{
                console.log(token)
                expect.assertions(1)
                expect(typeof token).toBe('string')
            })
        })   
    })

})