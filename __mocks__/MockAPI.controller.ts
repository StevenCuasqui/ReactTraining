import { IController } from "../src/controllers/IController";
import { Category } from "../src/interfaces/Category";
import { Playlist } from "../src/interfaces/Playlist";
import { Track } from "../src/interfaces/Track";
import { PlaylistItem } from '../src/interfaces/PlaylistItem'
import categoriesMock from './categories.json';
import playlistsMock from './playlists.json'
import tracksMock from './tracks.json'

export class MockAPI implements IController{
    async requestCategories():Promise<Category[]>{
        const categoriesList:Category[] = await categoriesMock.categories.items
        return categoriesList
    }
    
    async requestPlaylists():Promise<Playlist[]>{
        const playlists:Playlist[] = await playlistsMock.playlists.items;
        return playlists;
    }

    async requestTracks():Promise<Track[]>{
        const tracks:Track[] = await tracksMock.items.map((item:PlaylistItem)=>{ return item.track});
        return tracks;
    }
}