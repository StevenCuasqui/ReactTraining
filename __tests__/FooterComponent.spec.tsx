import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Footer from "../src/components/FooterComponent";

describe("<Footer/>",function(){
    function renderHeader(){
        return render(<Footer/>)
    }
    describe("when component is rendered",function(){
        it("should display an specific text", ()=>{
            const testText = "In construction..."
            const { queryByText } = renderHeader();
            const footer = queryByText(testText);
            expect(footer).toBeInTheDocument();
        });
    });
});