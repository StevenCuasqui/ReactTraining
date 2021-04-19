import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Playlist from "../src/components/PlaylistComponent";

describe("<Footer/>",function(){
    function renderPlaylist(){
        return render(<Playlist/>)
    }

    describe("when component is rendered",function(){
        it("should display a Playlists text", ()=>{
            const testText = "Playlists"
            const { queryByText } = renderPlaylist();
            const playlist = queryByText(testText);
            expect(playlist).toBeInTheDocument();
        });
    });

    describe("when component is rendered",function(){
        it("should display a description text", ()=>{
            const testText = "Select your favorite Category, then discover playlists with new music."
            const { queryByText } = renderPlaylist();
            const playlist = queryByText(testText);
            expect(playlist).toBeInTheDocument();
        });
    });

});