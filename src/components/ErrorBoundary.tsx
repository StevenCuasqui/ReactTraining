import React, { Component, ErrorInfo, ReactNode } from "react";
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error:Error;
}

class ErrorBoundary extends Component<Props, State> {

    constructor(props:Props){
        super(props)

        this.state = {
            hasError: false,
            error: null
        };
    }

    // useEffect con Handler Rejection
    // useEffect(() => {
    //   window.addEventListener("unhandledrejection", asyncErrorHandler);
  
    //   return () => window.removeEventListener("unhandledrejection", asyncErrorHandler);
    // }, [asyncErrorHandler]);

    static getDerivedStateFromError(error: Error): State {
      console.log(error)
      return { hasError: true, error:error};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) :void{
      console.error("Uncaught error:", error, errorInfo);
      this.setState({
        error: error,
      });
    }

    render():ReactNode {
      if (this.state.hasError) {
        return (
            <div>
                <h5>Error:</h5> {this.state.error.toString()} <br />
            </div>
        )
      }else{
          return this.props.children;
      }      
    }
}   

export default ErrorBoundary;
