import { IController } from "../src/controllers/IController"
import { SpotifyAPI } from "../src/controllers/spotifyAPI.controller";

import { Category } from "../src/interfaces/Category";
import { Playlist } from "../src/interfaces/Playlist";
import { Track } from "../src/interfaces/Track";

let api:IController;
let token:string;

beforeAll(async ()=>{
    token = 'BQBHuabQYkO6pSVE3RbzGijF1QVToIAB4JOLsawH0iJsfnIfJLBqn4xhq0nLZzMhj9r9V8f0J0ApPOYE5yc'
    api = await new SpotifyAPI(token);
})

describe('spotifyAPI',function(){

    describe('requestCategories',function(){
        it('should return an array of Categories',async()=>{
            expect.assertions(1);
            const categories:Category[] = await api.requestCategories();
            expect(categories.length).not.toBe(0);
        })
    })

    describe('requestPlaylists',function(){
        it('should return an array of Playlists',async()=>{ 
            const testCategory = 'toplists'
            
            expect.assertions(1);
            const categories:Playlist[] = await api.requestPlaylists(testCategory);
            expect(categories.length).not.toBe(0);
        })
    })

    describe('requestTracks',function(){
        it('should return an array of Tracks',async()=>{
            const testPlaylist = '37i9dQZF1DXcBWIGoYBM5M'

            expect.assertions(1);
            const categories:Track[] = await api.requestTracks(testPlaylist);
            expect(categories.length).not.toBe(0);
        })
    })

})
