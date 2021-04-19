import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Category } from "../src/interfaces/Category";
import Dropdown from "../src/components/DropdownComponent";
import categoriesMock from '../__mocks__/categories.json';
import playlistsMock from '../__mocks__/playlists.json';
import { Playlist } from "../src/interfaces/Playlist";

describe('<Dropdown />', function(){

    function renderCategoriesDropdown(){
        const defaultOptionsProps:Category[] = categoriesMock.categories.items
        const defaultSelectedValueProps = '';
        const trackEvent = jest.fn()
        return render(<Dropdown data-testid="categories" options={defaultOptionsProps} selectedValue={defaultSelectedValueProps} changed={trackEvent}/>)
    }

    function renderPlaylistDropdown(){
        const defaultOptionsProps:Playlist[] = playlistsMock.playlists.items
        const defaultSelectedValueProps = '';
        const trackEvent = jest.fn()
        return render(<Dropdown data-testid="playlists" options={defaultOptionsProps} selectedValue={defaultSelectedValueProps} changed={trackEvent}/>)
    }

    describe('when component is rendered',function(){
        it('should display Categories the Dropdown with the defaultOptions',()=>{
            const testSelected = 'Top Lists';
            const { getByDisplayValue } = renderCategoriesDropdown();
            const category = getByDisplayValue(testSelected);
            expect(category).toBeInTheDocument()
        }) 
    })

    describe('when component is rendered',function(){
        it('should display Playlists the Dropdown with the defaultOptions',()=>{
            const testSelected = "Today's Top Hits";
            const { getByDisplayValue } = renderPlaylistDropdown();
            const playlist = getByDisplayValue(testSelected);
            expect(playlist).toBeInTheDocument()
        }) 
    })

    describe('when user selects other Dropdown option', function(){
        it('should display the selected option',async()=>{

            const {getByTestId, getByDisplayValue} = renderCategoriesDropdown();
            
            await waitFor(()=>{
                fireEvent.mouseDown(getByTestId('dropdown-select'), {
                    target: { value: "toplists" },
                })
            })
            getByTestId('dropdown-select');
            getByDisplayValue('Top Lists');
        })
        
    })
})