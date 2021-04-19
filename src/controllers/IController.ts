import { Album } from "../interfaces/Album";
import { Category } from "../interfaces/Category";
import { Playlist } from "../interfaces/Playlist";
import { Track } from "../interfaces/Track";

export interface IController{
    requestCategories():Promise<Category[]>
    requestPlaylists(categorieValue:string):Promise<Playlist[]>
    requestTracks(playlist:string):Promise<Track[]>
    requestCountryTracks(countryCode:string):Promise<Album[]>
}