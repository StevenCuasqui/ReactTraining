import React, { memo, ReactNode, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useToken } from "../context/TokenProvider";
import { IController } from "../controllers/IController";
import { SpotifyAPI } from "../controllers/spotifyAPI.controller";
import { Album } from "../interfaces/Album";
import AlbumListbox from "./AlbumListboxComponent";

interface Props{
    path:string;
    children?:ReactNode;
}

interface Country{
    name:string;
    ISO_A2:string;
}

interface GeoProperty{
    NAME:string;
    ISO_A2:string;
}

const Discover = (props:Props):JSX.Element => {

    const token:string = useToken();
    const spotifyData:IController = new SpotifyAPI(token);

    console.log('Rendering...')
    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
    const [albums, setAlbums] = useState({selectedAlbum: '', listOfAlbumsFromAPI: []});
    const [country, setCountry] = useState({selectedCountry:null});

    const countryChanged = (countrySelection: GeoProperty) => {
        
        const countrySelected:Country = {
            name: countrySelection.NAME,
            ISO_A2: countrySelection.ISO_A2
        }
        setCountry({selectedCountry: countrySelected});
        
    }

    useEffect(()=>{
        if(country.selectedCountry != null){
            try {
                const listTracksRequested = spotifyData.requestCountryTracks(country.selectedCountry.ISO_A2);
                listTracksRequested.then((items:Album[]) => {
                    setAlbums({
                        selectedAlbum: albums.selectedAlbum,
                        listOfAlbumsFromAPI: items
                    })
                });
            } catch (error) {
                console.log(error)
            }
        }
    }, [country.selectedCountry])

    return (
        <Row className="row-content">
            <Col md={7}>
                <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onClick = {()=>countryChanged(geo.properties)}
                                />
                            ))
                        }
                    </Geographies>
                </ComposableMap>
            </Col>
            <Col md={5}>
                <Col md={12} className="tracks-container">
                    <AlbumListbox albums={albums.listOfAlbumsFromAPI}/> 
                </Col>
            </Col>
            {props.children}       
        </Row>
    );
};

export default memo(Discover);