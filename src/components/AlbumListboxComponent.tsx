import React from 'react';
import { Button, ListGroup, Col } from 'react-bootstrap';
import { Album } from '../interfaces/Album';

interface ListAlbums{
    albums: Album[]
}

const AlbumListbox = (props:ListAlbums):JSX.Element => {
    return (
        <Col md={12}>
            <ListGroup className="list-group">
                { props.albums.map((item:Album, idx:number) =>
                    <Button  key={idx} variant="light"
                        id={item.id}>
                        {idx+1}. {item.name} - {item.artists[0].name}
                    </Button> 
                )}
            </ListGroup>
        </Col>
    );
}

export default AlbumListbox;