import React, {FormEvent, useEffect, useState} from 'react';
import Dropdown from './DropdownComponent';
import Listbox from './ListboxComponent';
import { SpotifyAPI } from "../controllers/spotifyAPI.controller";
import { Track } from '../interfaces/Track';
import { Playlist } from '../interfaces/Playlist';
import { Category } from '../interfaces/Category';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useToken } from '../context/TokenProvider';
import { IController } from '../controllers/IController';

const Playlist = ():JSX.Element => {
    const defaultCategoryOption:Category = {
        id:'default',
        name:'--Seleccione una Categoria--',
        index:0
    }
    const token:string = useToken();
    const spotifyData:IController = new SpotifyAPI(token);
    console.log('Rendering...')

    const [error, setError] = useState<string>(null);
    const [categories, setCategories] = useState({selectedCategory: '', listOfCategoriesFromAPI: []});
    const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
    const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
    
    useEffect(()=>{
        try {
            const categoriesRequested:Promise<Category[]> = spotifyData.requestCategories();
            categoriesRequested.then((items:Category[])=>{
                setCategories({
                    selectedCategory: categories.selectedCategory,
                    listOfCategoriesFromAPI: [defaultCategoryOption,...items]
                })
            })
        } catch (error) {
            console.log(error)
        }
        
    }, [categories.selectedCategory]);

    
    const categoryChanged = async (val:string) =>{
        if(val=="at_home"){
            console.log(val)
            setError("I crashed")
        }

        setCategories({
            selectedCategory: val,
            listOfCategoriesFromAPI: categories.listOfCategoriesFromAPI
        });
        
        try {
            const playlistsRequested:Promise<Playlist[]> = spotifyData.requestPlaylists(val);        
            
            playlistsRequested.then((items:Playlist[])=>{

                setPlaylist({
                    selectedPlaylist: playlist.selectedPlaylist,
                    listOfPlaylistFromAPI: items
                }) 
            }); 
        } catch (error) {
            console.log(error)
        }
            
    }

    const playlistChanged = (val:string) => {
        setPlaylist({
          selectedPlaylist: val,
          listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
        });
    }

    const buttonClicked = (e: FormEvent) => {

        e.preventDefault();
        try {
            const listTracksRequested = spotifyData.requestTracks(playlist.selectedPlaylist);
            listTracksRequested.then((items:Track[]) => {
                setTracks({
                    selectedTrack: tracks.selectedTrack,
                    listOfTracksFromAPI: items
                })
            });
        } catch (error) {
            console.log(error)
        }
        
    }
    
    return(
        <>
            <Row id="playlist" className="row-content">
                <Col md={5}>
                    <h2>Playlists</h2>
                    <p>
                        Select your favorite Category, then discover playlists
                        with new music.
                    </p> 
                    <Form onSubmit={buttonClicked}>
                        <Form.Group>
                            <Form.Label>Select Category: </Form.Label>
                            <Dropdown options={categories.listOfCategoriesFromAPI} selectedValue={categories.selectedCategory} changed={categoryChanged}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select Playlist: </Form.Label>
                            <Dropdown options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged}/>
                        </Form.Group>
                        <Form.Group className="text-center">
                            <Button variant="dark" type='submit'>Search</Button>
                        </Form.Group>
                    </Form> 
                </Col>
                <Col md={7}>
                    <Col md={12} className="tracks-container">
                        <Listbox items={tracks.listOfTracksFromAPI}/> 
                    </Col>
                </Col>
            </Row>
        {error && new Error()}
        </>
    )
}

export default Playlist;