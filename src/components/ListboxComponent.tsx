import React from 'react';
import { Button, ListGroup, Col } from 'react-bootstrap';
import { ListItem } from '../interfaces/ListItem';
import { PlaylistItem } from '../interfaces/PlaylistItem';

const Listbox = (props:ListItem):JSX.Element => {
    return (
        <Col md={12}>
            <ListGroup className="list-group">
                { props.items.map((item:PlaylistItem, idx:number) =>
                    <Button  key={idx} variant="light"
                        id={item.track.id}>
                        {idx+1}. {item.track.name} - {item.track.artists[0].name}
                    </Button> 
                )}
            </ListGroup>
        </Col>
    );
}

export default Listbox;