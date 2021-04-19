import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "../src/components/HeaderComponent";

describe("<Header/>",function(){
    function renderHeader(){
        return render(<Header/>)
    }

    describe("when component is rendered",function(){
        it("should display Music Discoverer in screen", ()=>{ 
            const { queryByText } = renderHeader();
            const header = queryByText("Music Discoverer");
            expect(header).toBeInTheDocument();
        });
    });

    describe("when component is rendered",function(){
        it("should display Home in screen", ()=>{ 
            const { queryByText } = renderHeader();
            const header = queryByText("Home");
            expect(header).toBeInTheDocument();
        });
    });

    describe("when component is rendered",function(){
        it("should display Discover in screen", ()=>{ 
            const { queryByText } = renderHeader();
            const header = queryByText("Discover");
            expect(header).toBeInTheDocument();
        });
    });

    describe("when component is rendered",function(){
        it("should display About in screen", ()=>{ 
            const { queryByText } = renderHeader();
            const header = queryByText("About");
            expect(header).toBeInTheDocument();
        });
    });

    describe("when component is rendered",function(){
        it("should display Login in screen", ()=>{ 
            const { queryByText } = renderHeader();
            const header = queryByText("Login");
            expect(header).toBeInTheDocument();
        });
    });
});