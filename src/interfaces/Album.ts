import { Artist } from "./Artist";

export interface Album{
    id:string;
    artists: Artist[];
    name: string;
    releaseDate:string;
}