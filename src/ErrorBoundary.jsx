import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message or render a fallback UI here
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error.toString()}</p>
          <div>{this.state.errorInfo.componentStack}</div>
        </div>
      );
    }

    // Render the children components normally if there are no errors
    return this.props.children;
  }
}

export default ErrorBoundary;
