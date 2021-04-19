import React, { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import { Category } from '../interfaces/Category';
import { Playlist } from '../interfaces/Playlist';

interface Option{
    id: string;
    name: string;
}

interface DropdownProps{
    changed: (value:string) => void;
    options: Option[];
    selectedValue: string;
}

const Dropdown = (props:DropdownProps):JSX.Element =>{

    const dropdownChanged = (e:ChangeEvent<HTMLSelectElement>) =>{
        props.changed(e.target.value);
    }

    return (
        <>
            <Form.Control data-testid="dropdown-select" as="select" custom value={props.selectedValue} onChange={dropdownChanged}>
                {props.options.map((item: Category | Playlist, index:number) => <option key={index} value={item.id}>{item.name}</option>)} 
            </Form.Control>
        </>
    )
}

export default Dropdown;