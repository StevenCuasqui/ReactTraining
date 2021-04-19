// export interface Track{
//     artistName:string;
//     name:string;
//     id:number;
// }

import { Artist } from "./Artist";

export interface Track{
    id:string;
    name:string;
    artists:Artist[];
}