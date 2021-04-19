import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import { useToken } from '../context/TokenProvider';
// import ErrorBoundary from './ErrorBoundary';
import { ErrorFallback } from "./ErrorBoundaryFunctional";
import {ErrorBoundary} from 'react-error-boundary'
import Playlist from './PlaylistComponent';

interface Props{
    default:boolean;
    path:string;
    children?:ReactNode
}   

const Home = (props:Props):JSX.Element => {
    const token = useToken();

    return( 
        <Container>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                {props.children}
                {token && <Playlist/>}
            </ErrorBoundary>
        </Container> 
    )
    
}

export default Home;