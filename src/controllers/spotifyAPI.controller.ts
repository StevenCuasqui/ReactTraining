import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Album } from "../interfaces/Album";
import { Category } from "../interfaces/Category";
import { Playlist } from "../interfaces/Playlist";
import { Track } from "../interfaces/Track";
import { IController } from "./IController";
// axios.defaults.baseURL = '';
export class SpotifyAPI implements IController{

    axiosInstance:AxiosInstance;

    constructor(private readonly _token:string){
        this.axiosInstance = axios.create ({
            baseURL : 'https://api.spotify.com/v1',
            method : 'GET',
            headers: { 'Authorization' : 'Bearer ' + this._token}
          })
    }
    
    // Evitar usar await
    async requestCategories():Promise<Category[]>{

        const categoriesResponse:AxiosResponse = await this.axiosInstance('/browse/categories?locale=en')
        const categories:Category[] = categoriesResponse.data.categories.items;
        return categories;
    }

    async requestPlaylists(categorieValue:string):Promise<Playlist[]>{

        const playlistsResponse:AxiosResponse = await this.axiosInstance(`/browse/categories/${categorieValue}/playlists?limit=10`);
        const playlists:Playlist[] = playlistsResponse.data.playlists.items;
        return playlists;
    }

    async requestTracks(playlist:string):Promise<Track[]>{

        const tracksListResponse:AxiosResponse = await this.axiosInstance(`/playlists/${playlist}/tracks?limit=10`);
        const tracks = tracksListResponse.data.items;
        return tracks;
    }

    async requestCountryTracks(countryCode:string):Promise<Album[]>{
        const tracksListResponse = await this.axiosInstance(`/browse/new-releases?country=${countryCode}&limit=10`);
        const albums = tracksListResponse.data.albums.items;
        return albums;
    }
}