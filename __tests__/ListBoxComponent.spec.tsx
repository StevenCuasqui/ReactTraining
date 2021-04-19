import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { PlaylistItem } from "../src/interfaces/PlaylistItem";
import Listbox from "../src/components/ListboxComponent";

describe('<ListBox />', function(){

    function renderListBox(){
        const defaultProps:PlaylistItem[] = [
            {
                track : {
                    name:'if we never met (feat. Kelsea Ballerini)',
                    id:'6Wn87ApHs5tJMycmDynwPU',
                    artists:[{id:'73eAAfRkS2Vi4hx68oTJJE', name:'John K'}]
                },
            },
        ]

        // const defaultProps:PlaylistItem[] = tracksMock.items.map((item)=>{return item})
        // console.log(defaultProps)
        return render(<Listbox items={defaultProps}/>)
    }

    describe("when Listbox is submitted",function(){
        it("should render a list of tracks", ()=>{
            const trackName = "1. if we never met (feat. Kelsea Ballerini) - John K"
            const { queryByText } = renderListBox();
            const track = queryByText(trackName);
            expect(track).toBeInTheDocument();
        });
    });
})