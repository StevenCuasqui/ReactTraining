import React, {} from 'react';
import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback = (error:FallbackProps):JSX.Element => {
    return (
      <div>
        <h5>Something went wrong:</h5> <br/>
        <pre>{error}</pre>
      </div>
    )
}